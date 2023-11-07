# Class Diagram

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/main/documentation/static/img/ClassDiagram.png)

## vscode.ExtensionContext

    This class is provided to us by the vscode extension framework.
    It serves as the context for for our extension and allows us to interact with the VS Code environment, register commands, and manage any other part of our extension that must interact with the VS Code IDE.
    When the extension is started the vscode.ExtensionContext class is activated which allows us to initialize and set up the extension.

## ChatGPTViewProvider

    The ChatGPTViewProvider class is responsible for managing the webview inside of our extension which allows the users to read the code reviews from ChatGPT and interact with the chat bot.
    This class is the core of the extension and is responsible for handling many different aspects of the extension.

    - **setAuthenticationInfo:** This function is responsible for setting the API key and initializing the chatGPT API.
    - **sendWebviewMessage:** The sendWebViewMessage method provides the functionality to send mesages to the webview, so the code review bot can communciate with the extension.
    - **setSettings:** The setSettings function allows the user to configure the extensions settings including an option to use the server's API, modify prompts, and other behavior.
    - **resolveWebviewView:**  This function is responsible for setting up the webview view by defining it's HTML content and handling incoming messages from the code review bot (chatGPT).
    - **resetConversation:** Provides the functionality to clear and reset the conversation with the code review bot.  The function will clear the user input and responses from the chatbot making the bot ready for a fresh conversation.
    - **search:** The search function is responsible for managing the chatbot by feeding the chatbot the correct prompt selected by the user and combining it with the users selecetd code or entire file.

## vscode.window

    The vscode.window class is part of the VS Code extension API and provides methods to interact with the VS Code window and its components.
    In the extension it is used to show users the different code review options the extension contains when they highlight code and right click.
    The input box the user can use to ask follow up questions to the chat bot is also craeted by this class.
    The extension also uses this class to display a variety of error messages in case something goes wrong while using the extension.
    The vscode.window class helps us to work with the currently active text editor and document, allowing the extension to pick up the code the user has written out in the IDE.

## vscode.commands

    The vscode.commands class is also part of the VS Code exntension API.
    It is used to register and execute custom commands included in the extension.
    We use two of the classes functions, "registerCommand" and "executeCommand".
    These functions allow us to add new commands to the extension such as the "Code Review" and "Test Suggestions" commands.

## ChatGPTAPI

    The ChatGPTAPI class is used to interact with OpenAI's ChatGPT.
    This allows our extension to communicate with the GPT model, obtain it's responses, and integrate them into the VS Code IDE to provide the code reviews.

## Settings

    Interface used to provide a set of configuration options for the code review bot extension.
    Defines the settings object which can be used to customize the extension for each user.

## AuthInfo

    Interface used for providing authentication infor to the extension so it can interact with the ChatGPT API.
