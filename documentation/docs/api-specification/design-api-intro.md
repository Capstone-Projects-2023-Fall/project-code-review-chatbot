---
sidebar_position: 1
description: What should be in this section.
---

## switch
* Class Purpose: This class starts the extension or turns it off.
 *Data Fields:
  * ApiKey
     * Type: string
     * Purpose: Store the API key 
* methods:

  **activate()**
  
    * Purpose: Activates extension for the user.
    * pre-condition: Vailded user.
    * post-condition: None.
    * Parameters: ApiKey 
    * Exceptions Thrown: If the extension did not start

  **deactivate()**
  
    * Purpose: Deactivate extension for the user.
    * pre-condition: It has already started.
    * post-condition: None.
    * Parameters: context –> The extension's context.
    * Exceptions Thrown: If the extension did not end.

## Setting
* Class Purpose: This class allows the users to change the setting to their own needs.
* Data Fields:
   * setting
      * Type: JSON
      * Purpose: Display all the current settings of the application

* methods:

   **getSettings()**
  
    * Purpose: get the current setting for the user.
    * pre-condition: Vailded user.
    * post-condition: None.
    * Parameters: None.
    * Exceptions Thrown: None.

    **setSettings()**
  
    * Purpose: apply changes to the current setting for the user.
    * pre-condition: Vailded user.
    * post-condition: None.
    * Parameters: None.
    * Exceptions Thrown: None.

## ChatGPTHandler
* Class Purpose: This class will handle generating the web view from chatGPT
* Data Fields:
   * responseFromChatGPT
    * Type: String.
    * Purpose: Store the input from ChatGpt.
      
* methods:
  
  **_getHtmlForWebview()**
  
    * Purpose: generate web view from the GPT response.
    * pre-condition: Vaild input.
    * post-condition: None.
    * Parameters: None.
    * Exceptions Thrown: Null input from ChatGPT
    * Return Valid: HTML web view.
 
## Search
* Class Purpose: This class will provide the capability for the user to type in questions to search.
* Data Fields:
  * inputForChatGPT
   * Type: String.
   * Purpose: Store the input from the user.
 
* methods:
  
  **search()**
  
    * Purpose: provide the ability for the user to type in whatever they want into the ChatGPT.
    * pre-condition: Vaild input.
    * post-condition: None.
    * Parameters: None.
    * Exceptions Thrown: Null input from the user.
    * Return Valid: Response from the ChatGPT.
      
   **resetConversation()**
  
    * Purpose: provide the ability for the user to erase the previous conversation.
    * pre-condition: If there were any data.
    * post-condition: None.
    * Parameters: None.
    * Exceptions Thrown: If there weren't any data to delete.
