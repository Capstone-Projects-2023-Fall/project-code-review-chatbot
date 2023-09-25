---
sidebar_position: 2
---

# System Block Diagram

![image](https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/70736675/748d83c8-b13b-4534-8d7b-738d977f00f1)


The above diagram depicts the regular usage of the chat code review bot. In the diagram, the user begins with code open in VS Code and the extension installed. 
After selecting a portion of the code and clicking review or committing changes, the extension will send a request to the Laravel server to process a review for the code. 
Upon receiving the code, the server will send a request to the ChatGPT API with a formulated prompt to provide an accurate response. 
The API will provide ChatGPT's review of the code which the server will send back to the extension to display the suggestions to the user.
The server also sends the suggestions to the backend SQL server to store the suggestions for future analysis/usage. This can be used in the future if the user wants to review past suggestions or trends in their suggestions.




