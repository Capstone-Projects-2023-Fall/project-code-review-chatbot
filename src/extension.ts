import * as vscode from 'vscode';
import { ChatGPTAPI } from 'chatgpt';
import * as dotenv from 'dotenv';
import * as path from 'path';
import axios from "axios";
import * as fs from 'fs';
import { promises as fsPromises } from 'fs';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as mysql from 'mysql2';
import { exec } from 'child_process';



dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
const DB_HOST = process.env.DB_HOST!;
const DB_USER = process.env.DB_USER!;
const DB_PASSWORD = process.env.DB_PASSWORD!;
const DB_DATABASE = process.env.DB_DATABASE!;

const dbConfig = {
	host:DB_HOST,
	user: DB_USER ,
	password: DB_PASSWORD,
	database: DB_DATABASE
};

const pool = mysql.createPool(dbConfig);

type AuthInfo = { apiKey?: string };
type Settings = { selectedInsideCodeblock?: boolean, codeblockWithLanguageId?: false, pasteOnClick?: boolean, keepConversation?: boolean, timeoutLength?: number, model?: string, apiUrl?: string, useServerApi?: boolean };

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
				await config.update('enablePreCommitHook', true, vscode.ConfigurationTarget.Global);
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
		keepConversation: config.get('keepConversation') || true,
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
		vscode.window.registerWebviewViewProvider(ChatGPTViewProvider.viewType, provider, {
			webviewOptions: { retainContextWhenHidden: true }
		})
	);


	const commandHandler = (command: string, useEntireFile: boolean = false, isCodeReview: boolean = false) => {
		console.log("command handler");
		const config = vscode.workspace.getConfiguration('chatgpt');
		const prompt = config.get(command) as string;
	
		// Check if the command is promptPrefix.quickFix
		if (command === 'promptPrefix.quickFix') {
			provider.applyQuickFixes();
		} else {
			provider.search(prompt, useEntireFile, isCodeReview);
		}
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
		vscode.commands.registerCommand('chatgpt.codeReview', () => commandHandler('promptPrefix.codeReview', true, true)),
		vscode.commands.registerCommand('chatgpt.codeReviewAddComments', () => commandHandler('promptPrefix.codeReviewAddComments')),
		vscode.commands.registerCommand('chatgpt.testSuggestions', () => commandHandler('promptPrefix.testSuggestions')),
		vscode.commands.registerCommand('chatgpt.legibilitySuggestions', () => commandHandler('promptPrefix.legibilitySuggestions')),
		vscode.commands.registerCommand('chatgpt.quickFix', () => commandHandler('promptPrefix.quickFix')),
		vscode.commands.registerCommand('chatgpt.learnMore', () => commandHandler('promptPrefix.LearnMore')),
		vscode.commands.registerCommand('chatgpt.resetConversation', () => provider.resetConversation()),
		vscode.commands.registerCommand('chatgpt.findIssue', (issueTitle: string) => {
			const config = vscode.workspace.getConfiguration('chatgpt');
			const promptPrefix = config.get('promptPrefix.findIssue') as string;
			console.log('Received issueTitle:', issueTitle);

			// Modify the prompt to include the issueTitle received from the webview
			const prompt = `${promptPrefix} ${issueTitle}`;

			// Pass the modified prompt to the search function
			provider.search(prompt, true, false);
		})


	);


	// Change the extension's session token or settings when configuration is changed
	vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
		if (event.affectsConfiguration('chatgpt.apiKey')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			provider.setAuthenticationInfo({ apiKey: config.get('apiKey') });
		} else if (event.affectsConfiguration('chatgpt.apiUrl')) {
			const config = vscode.workspace.getConfiguration('chatgpt');
			let url = config.get('apiUrl') as string || BASE_URL;
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
			} else {
				deletePreCommitHookIfNecessary();
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


async function deletePreCommitHookIfNecessary(): Promise<void> {
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (workspaceFolders) {
		const gitHooksPath = path.join(workspaceFolders[0].uri.fsPath, '.git', 'hooks');
		const scriptPath = path.join(gitHooksPath, 'pre-commit');

		try {
			await fsPromises.stat(scriptPath);
			await fsPromises.unlink(scriptPath);
			vscode.window.showInformationMessage('The pre-commit hook was successfully disabled.');
		} catch (error: any) {
			if (error.code === 'ENOENT') {
				// The pre-commit hook does not exist, no need to delete
				vscode.window.showInformationMessage('No pre-commit hook to delete.');
			} else {
				// An error occurred while trying to delete the pre-commit hook
				vscode.window.showErrorMessage('An error occurred while trying to delete the pre-commit hook: ' + error.message);
			}
		}
	}
}


function getScriptContent(): string {
	try {
		// Resolve the path to the file relative to the current directory
		const filePath = resolve(__dirname, '..', 'src', 'commitIntervention/pre-commit');

		// Read the content of the file
		const content = readFileSync(filePath, { encoding: 'utf-8' });

		return content;
	} catch (error) {
		// If there's an error reading the file, log the error and return a default string
		console.error("Error reading the pre-commit file: ", error);
		return '';
	}
}

  function getActiveEditor() {
    return vscode.window.activeTextEditor;
}

function getActiveFileUri() {
    const editor = getActiveEditor();
    if (editor) {
        return editor.document.uri;
    }
    return null;
}

function getActiveFilePath() {
    const fileUri = getActiveFileUri();
    return fileUri ? fileUri.fsPath : null;
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

	// Fires when quick fix button is clicked. Grabs quick fix section of response.
	public applyQuickFixes() {
		const response = this._response;
		
		if (response != null) 
		{
			const quickFixStart = response.indexOf('[Fix 1]');
			const quickFixEnd = response.indexOf('---', quickFixStart);

			if (quickFixStart !== -1 && quickFixEnd !== -1) {
				const quickFixSection = response.substring(quickFixStart, quickFixEnd);
				console.log('Quick Fix Section:', quickFixSection);
				this.applyFixes(quickFixSection);
			} else {
				console.log('Quick Fix section not found in the response.');
			}
		}
		else 
		{
			console.log('Must run code review command before fixing code.');
			vscode.window.showErrorMessage('Must run code review command before fixing code.');
		}

	}

	public applyFixes(quickFixSection: string) {
		const fixes = quickFixSection.split('[Fix ');
	
		for (const fix of fixes) {
			if (fix.trim() !== '') {
				const description = this.extractValue(fix, 'Description:');
				const location = this.extractValue(fix, 'To Be Replaced:');
				const suggestedFix = this.extractValue(fix, 'Suggested Fix:');
	
				// Make each fix to the users file
				this.applyFixToUserFile(description ? description.value : null, location ? location.value : null, suggestedFix ? suggestedFix.value : null);
			}
		}
	}
	
	extractValue(fix: string, label: string) {
		const startIndex = fix.indexOf(label);
		if (startIndex !== -1) {
			const valueStartIndex = startIndex + label.length;
			const valueEndIndex = fix.indexOf('\n', valueStartIndex);
			const value = fix.substring(valueStartIndex, valueEndIndex).trim();
			return { value };
		}
		return null;
	}
	
	applyFixToUserFile(description: string | null, location: string | null, suggestedFix: string | null) {
		if (description && location && suggestedFix) {
			try {
				const filePath = getActiveFilePath();
				if (filePath) {
					let fileContent = fs.readFileSync(filePath, 'utf-8');
					console.log(`To Be Replaced: ${location}`);
	
					// find the specified text in the file
					const textToReplace = location.trim();
					const startIndex = fileContent.indexOf(textToReplace);
	
					if (startIndex !== -1) {
						// Replace the text with the suggested fix
						fileContent = fileContent.slice(0, startIndex) + suggestedFix + fileContent.slice(startIndex + textToReplace.length);
	
						// Write the changes back to the file
						fs.writeFileSync(filePath, fileContent, 'utf-8');
	
						console.log(`Fix applied successfully to the file.`);
					} else {
						console.log(`Specified text not found in the file.`);
					}
				} else {
					console.error('File path is null');
				}
			} catch (error) {
				console.error('Error applying fix:', error);
			}
		} else {
			console.error('Invalid fix data.');
		}
	}	

	public sendWebviewMessage(type: string, data?: any) {
		this._view?.webview.postMessage({ type, data });
	}


	public setSettings(settings: Settings) {
		let changeModel = false;
		if (settings.apiUrl || settings.model) {
			changeModel = true;
		}
		this._settings = { ...this._settings, ...settings };

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
		} else {
			this._chatGPTAPI = new ChatGPTAPI({
				apiKey: OPENAI_API_KEY,
				apiBaseUrl: this._settings.apiUrl,
				completionParams: { model: this._settings.model || "gpt-4" },
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
			console.log("Received message:", data);
			console.log(data.type);
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
				case 'learnMore':
					{
						vscode.commands.executeCommand("chatgpt.learnMore");
						break;
					}
				case 'askGPT':
					{
						vscode.commands.executeCommand('chatgpt.ask');
						break;

					}

				case 'quickFix':
					{
						this.applyQuickFixes();
						break;
					}
				case 'checkboxChange':
					{
						let workspacePath = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0
						? vscode.workspace.workspaceFolders[0].uri.fsPath
						: null;

						console.log("Checkbox states have changed:", data.userChanges);

						const currentTime = new Date();
						const formattedTimestamp = currentTime.toISOString().slice(0, 19).replace('T', ' ');
						const userChangesString = data.userChanges.join('\n');

						if(workspacePath){
							exec('git diff', { cwd: workspacePath }, (error, stdout, stderr) => {
								if (error){
									console.error('error',error);
									return;
								}
	
								let parsedDiff = stdout.trim() === '' ? 'No git diff detected' : stdout;
	
								const checkboxData = {
									timestamp: formattedTimestamp,
									logs: userChangesString,
									gitDiff: parsedDiff
									};
								
									const query = 'INSERT INTO test SET ?';
						
									pool.getConnection((err, connection) => {
									if (err) {
										console.error("Error connecting to the database", err);
										return;
									}
								
									connection.query(query, checkboxData, (error, results) => {
										connection.release();
								
										if (error) {
										console.error("Error inserting data", error);
										} else {
										console.log('Successfully inserted data:', results);
										}
	
									});
								});
							});

						}
						break;
					}
				case 'findIssue': {
					vscode.commands.executeCommand('chatgpt.findIssue', data.issueTitle);
					break;
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



	public async search(prompt?: string, useEntireFile: boolean = false, isCodeReview: boolean = false) {
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
		if (isCodeReview) {
			this._view?.webview.postMessage({ type: 'codeReviewCommandExecuted', value: '' });
		}
		else {
			this._view?.webview.postMessage({ type: 'addResponse', value: '' });
		}


		if (this._view) {
			const loadingImage = this._view?.webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'resources', 'extensionIcon.png'));
			this._view?.webview.postMessage({ type: 'loadResponse', value: loadingImage.toString() });
		}


		if (this._settings.useServerApi) {
			try {
				// Send the search prompt to the ChatGPTAPI instance and store the response
				const res =
					await axios.post("https://foldychbca36qdwt2zredrtxmm0njxmf.lambda-url.us-east-1.on.aws/api/review",
						{ prompt: this._fullPrompt, model: this._settings.model }

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
								if (isCodeReview) {
									this._view.webview.postMessage({ type: 'codeReviewCommandExecuted', value: response });
								}
								else {
									this._view.webview.postMessage({ type: 'addResponse', value: response });
								}

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

				} catch (e: any) {
					console.error(e);
					if (this._currentMessageNumber === currentMessageNumber) {
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
			if (isCodeReview) {
				this._view.webview.postMessage({ type: 'codeReviewCommandExecuted', value: response });
			}
			else {
				this._view.webview.postMessage({ type: 'addResponse', value: response });
			}

		}
	}


	private _getHtmlForWebview(webview: vscode.Webview) {

		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));
		const scriptStyleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css'));
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
				<link rel="stylesheet" href="${scriptStyleUri}">
			
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

				.center {
					display: block;
					margin: auto;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 10%;
				}
				
				#spin-animation {
					animation-name: spin-animation;
					animation-duration: 1500ms;
					animation-iteration-count: infinite;
					animation-timing-function: ease-in-out;
					
				}
				
				@keyframes spin-animation {
					0% {
						transform: rotate(0deg);
					}
					25% {
						transform: rotate(0deg);
					}
					75% {
						transform: rotate(360deg);
					}
					100%{
						transform: rotate(360deg);
					}

					
				}
				</style>
			</head>
			<body style="display: flex; flex-direction: column; height: 100vh;">
				<div style="flex: 1;">
					<input class="h-10 w-full text-white bg-stone-700 p-4 text-sm" placeholder="Welcome to Code Review ChatBot!" id="prompt-input" />

					<div id="response" class="pt-4 text-sm"> 

					</div>
				</div>

				<!-- Your button at the bottom -->
				<button class="h-10 w-full text-white bg-stone-700 p-4 text-sm" id="learn-more-button">Learn More About The Previous Suggestion</button>
				<button class="h-10 w-full text-white bg-stone-700 p-4 text-sm" id="askButton">Talk to GPT</button>
				<button class="h-10 w-full text-white bg-stone-700 p-4 text-sm" id="quickFixButton">Quick Fix Code</button>

				<script src="${scriptUri}"></script>
		
			</body>
			</html>`;
	}
}

// This method is called when your extension is deactivated
export function deactivate() { }