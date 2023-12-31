//based on: https://github.com/estruyf/vscode-auth-sample/tree/main

import { authentication, AuthenticationProvider, AuthenticationProviderAuthenticationSessionsChangeEvent, AuthenticationSession, Disposable, env, EventEmitter, ExtensionContext, ProgressLocation, Uri, UriHandler, window } from "vscode";
import { v4 as uuid } from 'uuid';
import { PromiseAdapter, promiseFromEvent } from "./util";
import fetch from 'node-fetch';

export const AUTH_TYPE = `CRC`;
const AUTH_NAME = `Code Review Chatbot Auth`;
const CRC_DOMAIN = `https://warm-peak-lwbvevmnn7vy.vapor-farm-c1.com`;
const SESSIONS_SECRET_KEY = `${AUTH_TYPE}.sessions`;

type AuthUserInfo =  { name: string, email: string };



class UriEventHandler extends EventEmitter<Uri> implements UriHandler {
	public handleUri(uri: Uri) {
		this.fire(uri);
	}
}

export class CRCAuthenticationProvider implements AuthenticationProvider, Disposable {
	private _sessionChangeEmitter = new EventEmitter<AuthenticationProviderAuthenticationSessionsChangeEvent>();
  private _disposable: Disposable;
  private _pendingStates: string[] = [];
  private _codeExchangePromises = new Map<string, { promise: Promise<string>; cancel: EventEmitter<void> }>();
  private _uriHandler = new UriEventHandler();
  
  constructor(private readonly context: ExtensionContext) {
    this._disposable = Disposable.from(
      authentication.registerAuthenticationProvider(AUTH_TYPE, AUTH_NAME, this, { supportsMultipleAccounts: false }),
      window.registerUriHandler(this._uriHandler)
    );
  }

	get onDidChangeSessions() {
		return this._sessionChangeEmitter.event;
	}

  get redirectUri() {
    const publisher = this.context.extension.packageJSON.publisher;
    const name = this.context.extension.packageJSON.name;
    return `${env.uriScheme}://${publisher}.${name}`;
  }

  /**
   * Get the existing sessions
   * @param scopes 
   * @returns 
   */
  public async getSessions(scopes?: string[]): Promise<readonly AuthenticationSession[]> {
    const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);

    var finalSessions : AuthenticationSession[] = new Array();

    if (allSessions) {
      let sessions = JSON.parse(allSessions) as AuthenticationSession[];
      for (let i=0; i < sessions.length; i++) {
        const userinfo : AuthUserInfo = await this.getUserInfo(sessions[i].accessToken);
        if (!userinfo) {
          this.removeSession(sessions[i].id);
        } else {
          finalSessions.push(sessions[i]);
        }
      }
    }

    return finalSessions;
  }

  /**
   * Create a new auth session
   * @param scopes 
   * @returns 
   */
  public async createSession(scopes: string[]): Promise<AuthenticationSession> {
    try {
      const token = await this.login(scopes);
      if (!token) {
        throw new Error(`CRC login failure`);
      }

      const userinfo : AuthUserInfo = await this.getUserInfo(token);



      const session: AuthenticationSession = {
        id: uuid(),
        accessToken: token,
        account: {
          label: userinfo.name,
          id: userinfo.email
        },
        scopes: []
      };

      await this.context.secrets.store(SESSIONS_SECRET_KEY, JSON.stringify([session]))

      this._sessionChangeEmitter.fire({ added: [session], removed: [], changed: [] });

      return session;
    } catch (e) {
      window.showErrorMessage(`Sign in failed: ${e}`);
			throw e;
    }
  }

  /**
   * Remove an existing session
   * @param sessionId 
   */
  public async removeSession(sessionId: string): Promise<void> {
    const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    if (allSessions) {
      let sessions = JSON.parse(allSessions) as AuthenticationSession[];
      const sessionIdx = sessions.findIndex(s => s.id === sessionId);
      const session = sessions[sessionIdx];
      sessions.splice(sessionIdx, 1);

      await this.context.secrets.store(SESSIONS_SECRET_KEY, JSON.stringify(sessions));

      if (session) {
        this._sessionChangeEmitter.fire({ added: [], removed: [session], changed: [] });
      }      
    }
  }

  /**
   * Dispose the registered services
   */
	public async dispose() {
		this._disposable.dispose();
	}

  /**
   * Log in to Auth
   */
  private async login(scopes: string[] = []) {
    return await window.withProgress<string>({
			location: ProgressLocation.Notification,
			title: "Signing in to CRC...",
			cancellable: true
		}, async (_, token) => {
      const stateId = uuid();

      this._pendingStates.push(stateId);

      const scopeString = scopes.join(' ');

      if (!scopes.includes('openid')) {
        scopes.push('openid');
      }
      if (!scopes.includes('profile')) {
        scopes.push('profile');
      }
      if (!scopes.includes('email')) {
        scopes.push('email');
      }

      const searchParams = new URLSearchParams([
        ['response_type', "token"],
        ['redirect_uri', this.redirectUri],
        ['state', stateId],
        ['scope', scopes.join(' ')],
        ['prompt', "login"]
      ]);
      const uri = Uri.parse(`${CRC_DOMAIN}/authorize?${searchParams.toString()}`);
      await env.openExternal(uri);

      let codeExchangePromise = this._codeExchangePromises.get(scopeString);
      if (!codeExchangePromise) {
        codeExchangePromise = promiseFromEvent(this._uriHandler.event, this.handleUri(scopes));
        this._codeExchangePromises.set(scopeString, codeExchangePromise);
      }

      try {
        return await Promise.race([
          codeExchangePromise.promise,
          new Promise<string>((_, reject) => setTimeout(() => reject('Cancelled'), 60000)),
          promiseFromEvent<any, any>(token.onCancellationRequested, (_, __, reject) => { reject('User Cancelled'); }).promise
        ]);
      } finally {
        this._pendingStates = this._pendingStates.filter(n => n !== stateId);
        codeExchangePromise?.cancel.fire();
        this._codeExchangePromises.delete(scopeString);
      }
    });
  }

  /**
   * Handle the redirect to VS Code (after sign in from CRC)
   * @param scopes 
   * @returns 
   */
  private handleUri: (scopes: readonly string[]) => PromiseAdapter<Uri, string> = 
  (scopes) => async (uri, resolve, reject) => {
    const query = new URLSearchParams(uri.fragment);
    const access_token = query.get('access_token');
    const state = query.get('state');


    if (!access_token) {
      reject(new Error('No token.'));
      return;
    }
    if (!state) {
      reject(new Error('No state'));
      return;
    }

    // Check if it is a valid auth request started by the extension
    if (!this._pendingStates.some(n => n === state)) {
      reject(new Error('State not found'));
      return;
    }

    resolve(access_token);
  }

  /**
   * Get the user info from CRC
   * @param token 
   * @returns 
   */
  private async getUserInfo(token: string) {
    const response : any = await fetch(`${CRC_DOMAIN}/api/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return await response.json();
    } else {
      return undefined;
    }
  }
}