---
sidebar_position: 4
---

# Features and Requirements

## Functional 
### VSCode Integration
- The code review bot will be integrated into VSCode IDE.  This intergration will allow users to perform code reviews directly inside of their IDE when using VSCode.  
- A VSCode extension must be created and puublished onto the VSCode extension marketplace so users can easily download and use the code review chatbot.

### Commit Detection
- The code review bot will continuously monitor the user's code to check for commits.

### Intervention on Commit
- When a users makes a commit in their IDE, the code review bot will automatically intervene and perform a code review.  The user can then decide whether to make the suggested changes before pushing the changes to a git repository.
- The user will be able to modify their code and then confirm the commit after reviewing the chatbot's suggestions.

### Code Review Suggestion
- The code review chatbot will provide developers with a variety of suggestions to help improve their code.  These suggestions will help developers improve the quality, readability, and maintainability of their code.
- Variable Naming Conventions:  If the code review bot finds poorly named varibales or varibales that are too similar to each otehr it will suggest better names to the user.
- Redundancy Issues: The code review bot will pick up on repeated blocks of code that could be made into a funtion to reduce the amount of duplicate code.
- Buggy or broken code:  The code review bot will pick up on code that could cause errors or may have unintended effects.  The bot will point the areas of broken code out to the developer and explain to them why it may lead to issues within the program/application they are creating.
- Test Recommendations: The code review bot will suggest different unit tests developers can implement to help with code readability and functionality.
- Complexity: If the code review bot picks up on a complex block of code it will suggest ways to simplify the code in order to make the code easier to maintain and improve readability.
- Legibility: In cases where code is tough to understand, the code review bot will suggest improvements in code structure and may suggest comments the developer can add.  Users will be able to toggle the bots comment suggestions as some organization do not want comments in there code.     

### Improvement Checklist
- After the code review bot completes its analysis, it will provide a checklist of potential improvements that could be made within the code.  

### Chatbot Conversation
- The user will be able to converse with the chatbot after it has done its initial analysis of the user's code.  The user will be able to ask the chatbot for additional explanations and suggestions regarding their code. The chatbot will be able to answer these questions and provide the user with the information they asked.

### Backend API Server
- The code review bot will implement a backend API server to securely store and manage the OpenAI token.
- Ensure that the token management is user-friendly and secure.

## Non-Functional

### Performance
- Load Speeds: The chatbot will respond within 3 seconds of intervening the commit.
- Scalability: The chatbot will be able to manage 1,000 consecutive requests.

### ChatGPT Integration
- The code bot will need to integrate with ChatGPT in order to provide sophisticated and accurate repsonses in a chat like manner.

### Comment Suggestions
- To help other developers better understand the user's code the bot will suggest spots the user should add comments.  For example, the bot will pick up on complex sections of the code and will suggest a comment for the user to add before the complex code block.

### JSON Checklist
- The code review bots improvement checklist will be given in JSON format.

### Security Suggestions
- The code review bot will check for security vulnerabilities in the user's code. For example, the bot may point out a chunk of code that is vulnerable to SQL injection attacks and give a suggestion on how to make the code more secure. 

### Error Handling Suggestions
- The codebot will suggest places the user can add error handling to help stop the program from crashing and creating a better user experience when unexpected errors occur

