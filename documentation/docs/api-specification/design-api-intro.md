---
sidebar_position: 1
description: What should be in this section.
---

## switch
* Class Purpose: This class starts the extension or turns it off.
* methods:

  **activate()**
    * Purpose: Activates extension for the user.
    * pre-condition: Vailded user.
    * post-condition: None.
    * Parameters: context – The extension's context.
    * Exceptions Thrown: If the extension did not start

  **deactivate()**
    * Purpose: Deactivate extension for the user.
    * pre-condition: It has already started.
    * post-condition: None.
    * Parameters: context – The extension's context.
    * Exceptions Thrown: If the extension did not end.
