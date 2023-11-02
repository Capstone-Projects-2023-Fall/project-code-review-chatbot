import * as vscode from 'vscode';
import { ChatGPTAPI } from 'chatgpt';
import * as dotenv from 'dotenv';
import * as path from 'path';
import axios from "axios";
import * as fs from 'fs';


dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;

type AuthInfo = {apiKey?: string};
type Settings = {selectedInsideCodeblock?: boolean, codeblockWithLanguageId?: false, pasteOnClick?: boolean, keepConversation?: boolean, timeoutLength?: number, model?: string, apiUrl?: string, useServerApi?: boolean};

const BASE_URL = 'https://api.openai.com/v1';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('chatgpt.enablePreCommitHook', async () => {
        const userApproval = await vscode.window.showInformationMessage(
            'This extension requires a pre-commit hook to function properly. Do you allow the extension to set it up for you?',
            'Yes', 'No'
        );

        if (userApproval === 'Yes') {
            try {
                const workspaceFolders = vscode.workspace.workspaceFolders;
                if (!workspaceFolders) {
                    vscode.window.showErrorMessage('No workspace is open.');
                    return;
                }

                const gitHooksPath = path.join(workspaceFolders[0].uri.fsPath, '.git', 'hooks');
                const scriptPath = path.join(gitHooksPath, 'pre-commit');

                if (!fs.existsSync(gitHooksPath)) {
                    vscode.window.showErrorMessage('Git is not initialized in this workspace, or it is not the root of the workspace.');
                    return;
                }

                const scriptContent = getScriptContent();
                fs.writeFileSync(scriptPath, scriptContent);
                fs.chmodSync(scriptPath, '755'); 

                vscode.window.showInformationMessage('Pre-commit hook has been set up successfully.');
            } catch (error) {
                vscode.window.showErrorMessage('Failed to set up the pre-commit hook.');
                console.error(error);
            }
        }
    });
	context.subscriptions.push(disposable);
	
	console.log('activating extension "chatgpt"');
	// Get the settings from the extension's configuration
	const config = vscode.workspace.getConfiguration('chatgpt');

	// Create a new ChatGPTViewProvider instance and register it with the extension's context
	const provider = new ChatGPTViewProvider(context.extensionUri);

	provider.setSettings({
		selectedInsideCodeblock: config.get('selectedInsideCodeblock') || false,
		codeblockWithLanguageId: config.get('codeblockWithLanguageId') || false,
		pasteOnClick: config.get('pasteOnClick') || false,
		keepConversation: config.get('keepConversation') || false,
		timeoutLength: config.get('timeoutLength') || 60,
		apiUrl: config.get('apiUrl') || BASE_URL,
		model: config.get('model') || 'gpt-4',
		useServerApi: config.get('useServerApi') || false
	});
	// Put configuration settings into the provider
	if (!config.get('useServerApi')) {
		provider.setAuthenticationInfo({
			apiKey: config.get('apiKey')
		});
	}
	
	

	// Register the provider with the extension's context
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(ChatGPTViewProvider.viewType, provider,  {
			webviewOptions: { retainContextWhenHidden: true }
		})
	);


	const commandHandler = (command:string, useEntireFile: boolean = false) => {
		const config = vscode.workspace.getConfiguration('chatgpt');
		const prompt = config.get(command) as string;
		provider.search(prompt, useEntireFile); 
	};

	context.subscriptions.push(
		vscode.commands.registerCommand('chatgpt.ask', () => 
			vscode.window.showInputBox({ prompt: 'What do you want to do?' })
			.then((value) => {
				if (value) {
					provider.search(value);
				}
			})
		),
		vscode.commands.registerCommand('chatgpt.explain', () => commandHandler('promptPrefix.explain')),
		vscode.commands.registerCommand('chatgpt.refactor', () => commandHandler('promptPrefix.refactor')),
		vscode.commands.registerCommand('chatgpt.optimize', () => commandHandler('promptPrefix.optimize')),
		vscode.commands.registerCommand('chatgpt.codeReview', () => commandHandler('promptPrefix.codeReview')),
		vscode.commands.registerCommand('chatgpt.codeReviewAddComments', () => commandHandler('promptPrefix.codeReviewAddComments')),
		vscode.commands.registerCommand('chatgpt.testSuggestions', () => commandHandler('promptPrefix.testSuggestions')),
		vscode.commands.registerCommand('chatgpt.legibilitySuggestions', () => commandHandler('promptPrefix.legibilitySuggestions')),
		vscode.commands.registerCommand('chatgpt.findProblemsNormal', () => commandHandler('promptPrefix.findProblems')),
		vscode.commands.registerCommand('chatgpt.findProblems', () => commandHandler('promptPrefix.findProblems',true)),
		vscode.commands.registerCommand('chatgpt.documentation', () => commandHandler('promptPrefix.documentation')),
		vscode.commands.registerCommand('chatgpt.resetConversation', () => provider.resetConversation())
	);


	// Change the extension's session token or settings when configuration is changed
	vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
		if (event.affectsConfiguration('chatgpt.apiKey')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setAuthenticationInfo({apiKey: config.get('apiKey')});
		}else if (event.affectsConfiguration('chatgpt.apiUrl')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			let url = config.get('apiUrl')as string || BASE_URL;
			provider.setSettings({ apiUrl: url });
		} else if (event.affectsConfiguration('chatgpt.model')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setSettings({ model: config.get('model') || 'gpt-4' }); 
		} else if (event.affectsConfiguration('chatgpt.selectedInsideCodeblock')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setSettings({ selectedInsideCodeblock: config.get('selectedInsideCodeblock') || false });
		} else if (event.affectsConfiguration('chatgpt.codeblockWithLanguageId')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setSettings({ codeblockWithLanguageId: config.get('codeblockWithLanguageId') || false });
		} else if (event.affectsConfiguration('chatgpt.pasteOnClick')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setSettings({ pasteOnClick: config.get('pasteOnClick') || false });
		} else if (event.affectsConfiguration('chatgpt.keepConversation')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setSettings({ keepConversation: config.get('keepConversation') || false });
		} else if (event.affectsConfiguration('chatgpt.timeoutLength')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setSettings({ timeoutLength: config.get('timeoutLength') || 60 });
		} else if (event.affectsConfiguration('chatgpt.useServerApi')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setSettings({ useServerApi: config.get('useServerApi') || false });
		}
	});

	vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('chatgpt.enablePreCommitHook')) {
            const config = vscode.workspace.getConfiguration('chatgpt');
            const enableHook = config.get('enablePreCommitHook', false);
            if (enableHook) {
                setupPreCommitHookIfNecessary();
            }
        }
    });

	setupPreCommitHookIfNecessary();
}

async function setupPreCommitHookIfNecessary() {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (workspaceFolders) {
        const gitHooksPath = path.join(workspaceFolders[0].uri.fsPath, '.git', 'hooks');
        const scriptPath = path.join(gitHooksPath, 'pre-commit');

        if (!fs.existsSync(scriptPath)) {
            await vscode.commands.executeCommand('chatgpt.enablePreCommitHook');
        }
    }
}

function getScriptContent(): string {
    return `
#!/bin/bash
# Script for commit intervention.

# Change this to true to enable commit intervention
export RUN_CODE_REVIEW=true

if [ "$RUN_CODE_REVIEW" = "true" ]; then

	echo "Running code review..."
	
	if [[ "$(uname)" == "Darwin" ]]; then
		osascript -e 'tell application "System Events" to keystroke "p" using {control down, option down}'
		user_choice=$(osascript -e 'display dialog "Do you want to proceed with the commit?" buttons {"Yes", "No"} default button "No"' -e 'button returned of result')
	elif [[ "$(uname)" == "CYGWIN"* || "$(uname)" == "MINGW"* ]]; then
		echo "detected windows device"
		powershell.exe -command "(New-Object -ComObject WScript.Shell).SendKeys('%^(p)')"
		user_choice=$(powershell.exe -command "$a = [System.Windows.Forms.MessageBox]::Show('Do you want to proceed with the commit?', 'Confirm', [System.Windows.Forms.MessageBoxButtons]::YesNo); if ($a -eq 'Yes') {'Yes'} else {'No'}")
	else
		echo "Unsupported OS."
		exit 1
	fi
	
	if [ "$user_choice" == "Yes" ]; then
		echo "Proceeding with the commit."
		exit 0
	else
		echo "Commit aborted by the user."
		exit 1
	fi

else
	echo "Skipping code review."
	exit 0
fi
	
    `;
}



export class ChatGPTViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'chatgpt.chatView';
	private _view?: vscode.WebviewView;

	private _chatGPTAPI?: ChatGPTAPI;
	private _conversation?: any;

	private _response?: string;
	private _prompt?: string;
	private _fullPrompt?: string;
	private _currentMessageNumber = 0;

	private _settings: Settings = {
		selectedInsideCodeblock: false,
		codeblockWithLanguageId: false,
		pasteOnClick: true,
		keepConversation: true,
		timeoutLength: 60,
		apiUrl: BASE_URL,
		model: 'gpt-4',
		useServerApi: false
	};
	private _authInfo?: AuthInfo;

	// In the constructor, we store the URI of the extension
	constructor(private readonly _extensionUri: vscode.Uri) {

	}
	
	// Set the API key and create a new API instance based on this key
	public setAuthenticationInfo(authInfo: AuthInfo) {
		this._authInfo = authInfo;
		this._newAPI();
			
	}

	public setSettings(settings: Settings) {
		let changeModel = false;
		if (settings.apiUrl || settings.model) {
			changeModel = true;
		}
		this._settings = {...this._settings, ...settings};

		if (changeModel && !settings.useServerApi) {
			this._newAPI();
		}
	}

	public getSettings() {
		return this._settings;
	}

	// This private method initializes a new ChatGPTAPI instance
	private _newAPI() {
		console.log("New API");
		if (!this._authInfo || !this._settings?.apiUrl) {
			console.warn("API key or API URL not set, please go to extension settings (read README.md for more info)");
		}else{	
			this._chatGPTAPI = new ChatGPTAPI({
				apiKey: OPENAI_API_KEY,
				apiBaseUrl: this._settings.apiUrl,
				completionParams: { model:this._settings.model || "gpt-4" },
			});
			// console.log( this._chatGPTAPI ); 
		}
	}

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {
		this._view = webviewView;

		// set options for the webview, allow scripts
		webviewView.webview.options = {
			enableScripts: true,
			localResourceRoots: [
				this._extensionUri
			]
		};

		// set the HTML for the webview
		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

		// add an event listener for messages received by the webview
		webviewView.webview.onDidReceiveMessage(data => {
			switch (data.type) {
				case 'codeSelected':
					{
						// do nothing if the pasteOnClick option is disabled
						if (!this._settings.pasteOnClick) {
							break;
						}
						let code = data.value;
						const snippet = new vscode.SnippetString();
						snippet.appendText(code);
						// insert the code as a snippet into the active text editor
						vscode.window.activeTextEditor?.insertSnippet(snippet);
						break;
					}
				case 'prompt':
					{
						this.search(data.value);
					}
			}
		});
	}


	public async resetConversation() {
		console.log(this, this._conversation);
		if (this._conversation) {
			this._conversation = null;
		}
		this._prompt = '';
		this._response = '';
		this._fullPrompt = '';
		this._view?.webview.postMessage({ type: 'setPrompt', value: '' });
		this._view?.webview.postMessage({ type: 'addResponse', value: '' });
	}


	public async search(prompt?: string, useEntireFile: boolean = false) {
		this._prompt = prompt;
		if (!prompt) {
			prompt = '';
		};

		// Check if the ChatGPTAPI instance is defined
		if (!this._chatGPTAPI && !this._settings.useServerApi) {
			this._newAPI();
		}

		// focus gpt activity from activity bar
		if (!this._view) {
			await vscode.commands.executeCommand('chatgpt.chatView.focus');
		} else {
			this._view?.show?.(true);
		}
		
		let response = '';
		this._response = '';

		let documentText: string | undefined;
		// Get the selected text of the active editor
		const selection = vscode.window.activeTextEditor?.selection;
		const selectedText = vscode.window.activeTextEditor?.document.getText(selection);

		if (useEntireFile) {
			documentText = vscode.window.activeTextEditor?.document.getText();
		} else if (selection && selectedText) {
			documentText = selectedText;
		}
		// Get the language id of the selected text of the active editor
		// If a user does not want to append this information to their prompt, leave it as an empty string
		const languageId = (this._settings.codeblockWithLanguageId ? vscode.window.activeTextEditor?.document?.languageId : undefined) || "";
		let searchPrompt = '';

		if (documentText) {
			if (this._settings.selectedInsideCodeblock) {
				searchPrompt = `${prompt}\n\`\`\`${languageId}\n${documentText}\n\`\`\``;
			} else {
				searchPrompt = `${prompt}\n${documentText}\n`;
			}
		} else {
			// Otherwise, just use the prompt if user typed it
			searchPrompt = prompt;
		}
		this._fullPrompt = searchPrompt;
		
		// Increment the message number
		this._currentMessageNumber++;
		let currentMessageNumber = this._currentMessageNumber; 

		this._view?.webview.postMessage({ type: 'setPrompt', value: this._prompt });
		this._view?.webview.postMessage({ type: 'addResponse', value: '...' });

		if (this._settings.useServerApi) {
			try {
				// Send the search prompt to the ChatGPTAPI instance and store the response
				const res =
				await axios.post("http://localhost/api/review",
				{prompt: this._fullPrompt, model: this._settings.model}
				
				);

				if (this._currentMessageNumber !== currentMessageNumber) {
					return;
				}


				
				response = res.data.text;
				if (res.data.detail?.usage?.total_tokens) {
					response += `\n\n---\n*<sub>Tokens used: ${res.data.detail.usage.total_tokens} (${res.data.detail.usage.prompt_tokens}+${res.data.detail.usage.completion_tokens})</sub>*`;
				}

				if (this._settings.keepConversation) {
					this._conversation = {
						parentMessageId: res.data.id
					};
				}

			} catch (e: any) {
				console.error(e);
				if (this._currentMessageNumber === currentMessageNumber) {
					response = this._response;
					response += `\n\n---\n[ERROR] ${e}`;
				}
			}
		} 
		else {
			if (!this._chatGPTAPI) {
				response = '[ERROR] "API key not set or wrong, please go to extension settings to set it (read README.md for more info)"';
			} else {
				// If successfully signed in
				console.log("sendMessage");
				
				// Make sure the prompt is shown
				this._view?.webview.postMessage({ type: 'setPrompt', value: this._prompt });
				this._view?.webview.postMessage({ type: 'addResponse', value: '...' });
	
				
				const agent = this._chatGPTAPI;
	
	
				try {
					// Send the search prompt to the ChatGPTAPI instance and store the response
					const res = await agent.sendMessage(searchPrompt, {
						onProgress: (partialResponse) => {
							// If the message number has changed, don't show the partial response
							if (this._currentMessageNumber !== currentMessageNumber) {
								return;
							}
							console.log("onProgress");
							if (this._view && this._view.visible) {
								response = partialResponse.text;
								this._response = response;
								this._view.webview.postMessage({ type: 'addResponse', value: response });
							}
						},
						timeoutMs: (this._settings.timeoutLength || 60) * 1000,
						...this._conversation
					});
	
					if (this._currentMessageNumber !== currentMessageNumber) {
						return;
					}
	
	
					response = res.text;
					if (res.detail?.usage?.total_tokens) {
						response += `\n\n---\n*<sub>Tokens used: ${res.detail.usage.total_tokens} (${res.detail.usage.prompt_tokens}+${res.detail.usage.completion_tokens})</sub>*`;
					}
	
					if (this._settings.keepConversation) {
						this._conversation = {
							parentMessageId: res.id
						};
					}
	
				} catch (e:any) {
					console.error(e);
					if (this._currentMessageNumber === currentMessageNumber){
						response = this._response;
						response += `\n\n---\n[ERROR] ${e}`;
					}
				}
			}
		}
		
		

		if (this._currentMessageNumber !== currentMessageNumber) {
			return;
		}

		// Saves the response
		this._response = response;

		// Show the view and send a message to the webview with the response
		if (this._view) {
			this._view.show?.(true);
			this._view.webview.postMessage({ type: 'addResponse', value: response });
		}
	}

	

	private _getHtmlForWebview(webview: vscode.Webview) {

		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));
		const microlightUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'scripts', 'microlight.min.js'));
		const tailwindUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'scripts', 'showdown.min.js'));
		const showdownUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'scripts', 'tailwind.min.js'));
	
		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<script src="${tailwindUri}"></script>
				<script src="${showdownUri}"></script>
				<script src="${microlightUri}"></script>
				<style>
				.code {
					white-space: pre;
				}
				p {
					padding-top: 0.3rem;
					padding-bottom: 0.3rem;
				}
				/* overrides vscodes style reset, displays as if inside web browser */
				ul, ol {
					list-style: initial !important;
					margin-left: 10px !important;
				}
				h1, h2, h3, h4, h5, h6 {
					font-weight: bold !important;
				}
				</style>
			</head>
			<body>
				<section id="extension-description" class="p-4">
					<h1>Code Review Chatbot</h1>
					<p>Welcome to <strong>Welcome To Code Review Chatbot</strong>! This tool is designed to help you review your code effectively</p>
					<p>Here's how you can get started:</p>
					<ol>
						<li><strong>Pre-commit Hook Setup:</strong> explain code review here.</li>
						<li><strong>Commit Detection:</strong> explain commit detection here.</li>
						<!-- Add more features as needed -->
					</ol>
					<p>For more information, visit our Github Repository <a href="https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot" target="_blank">documentation</a>.</p>
				</section>
				
				<!-- The rest of your webview content -->
	
				<script src="${scriptUri}"></script>
			</body>
			</html>`;
	}
}

// This method is called when your extension is deactivated
export function deactivate() {}