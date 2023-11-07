# Class Diagram

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/main/documentation/static/img/ClassDiagram.png)

## vscode.ExtensionContext

    This class is provided to us by the vscode extension framework.  It serves as the context for for our extension and allows us to interact with the VS Code environment, register commands, and manage any other part of our extension that must interact with the Vs Code IDE.  When the extension is started the vscode.ExtensionContext class is activated which allows us to initialize and set up the extension.

## ChatGPTViewProvider

    The ChatGPTViewProvider class is responsible for managing the webview inside of our extension which allows the users to read the code reviews from ChatGPT and interact with the chat bot.  This class is the core of the extension and is responsible for handling
    many different aspects of the extension.

    - **setAuthenticationInfo:** This function is responsible for setting the API key, initializing the chatGPT API.
    - **sendWebviewMessage:** The sendWebViewMessage method provides the functionality to send mesages to the webview, so the code review bot can communciate with the extension.
    - **setSettings:** The setSettings function allows the user to configure the extensions settings including an option to use the server's API, modify prompts, and other behavior.
    - **resolveWebviewView:**  This function is responsible for setting up the webview view by defining it's HTML content and handling incoming messages from the code review bot (chatGPT).
    - **resetConversation:** Provides the functionality to clear and rest the conversation with the code review bot.  The function will clear the user input and responses from the chatbot making the bot ready for a fresh conversation.
    - **search:** The search function is responsible for managing the chatbot by feeding the chatbot the correct prompt selected by the user and combining it with the users selecetd code or entire file.

## Backend Server

    Represents the backened server responsivble for storing and managing convesations and communicates with the extensions to store and retrieve data.

## Backend Storage

    Holds the API key and recieves/sends the requests the the Backened Server.

## ChatGPT API

    Represents the external API used to interacts with the ChatGPT model, which handles sending requests to and receiving responses from the external API.
