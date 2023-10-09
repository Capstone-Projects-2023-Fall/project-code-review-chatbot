---
title: Class Documentation
description: Class Documentation
hide_table_of_contents: true
sidebar_position: 1
---
Classes
=============================

## Classes/Functions For The Extension

### 1. export function: `activate()`

**Description**: This function is called when the extension is first activated. It initializes the extension and sets up the ChatGPTViewProvider.

**Params** : context – The extension's context.

**Data Fields**:
- apikey = OpenAI Token

- model = ChatGPT Model being used

**Methods:**

`provider.SetAuthenticationInfo()`
- Puts configuration settings into the provider

`context.subscriptions.push()`
- Register the provider with the extension's context
- Register the commands that can be called from the extension's package.json

### 2. public function : `setAuthenticationInfo()`

**Description** : Sets the API key and creates a new API instance based on this key.

**Params** : {AuthInfo} authInfo - Authentication information containing the API key.

**Returns** : any

### 3. public function : `setSettings()`

**Description**: Sets the ChatGPT settings

**Params** : {Settings} settings - ChatGPT settings to be applied

**Returns** : any

### 4. public function : `getSettings()`

**Description**: Retrieves the current ChatGPT settings.

**Returns** : {Settings} The current ChatGPT settings.

### 5. private function : `_newAPI()`

**Description**: Private method initializes a new ChatGPTAPI instance

### 6. public function : `resolveWebviewView()`

**Description**: Sets the ChatGPT settings

**Params** : 
- {vscode.WebviewView} webviewView - The WebviewView to be resolved.
- {vscode.WebviewViewResolveContext} context - The resolve context for the WebviewView.
- {vscode.CancellationToken} _token - A cancellation token for the operation.

**Returns** : any

### 7. public async function : `resetConversation()`

**Description**: Resets the conversation state and clears the conversaton history

**Returns** : {Promise} A Promise that resolves when the conversation is successfully reset.

### 8. public async function : `search()`

**Description**: Performs a ChatGPT search based on the provided prompt or user input.

**Params** : {string | undefined} prompt - The user's input prompt.

**Returns** : {Promise} A Promise that resolves when the conversation is successfully reset.

### 9. private function : `_getHtmlForWebview()`

**Description**: Generates the HTML content for the ChatGPT webview.

**Params** : {vscode.Webview} webview The Webview instance for generating HTML

**Returns** : {string} The HTML content as a string.

### 10. export function : `deactivate()`

**Description**: This function is called when the extension is first deactivated.
It deactivates the extension
