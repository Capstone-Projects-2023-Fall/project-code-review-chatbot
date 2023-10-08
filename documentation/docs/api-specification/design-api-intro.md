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
*Data Fields:
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
      * pre-condition: None.
      * post-condition: None.
      * Parameters: None.
      * Exceptions Thrown: Null entry.

  
