---
sidebar_position: 4
---

# Features and Requirements

## Functional 
### IDE Integration
- The code review bot will be integrated into popular IDE's such as VSCode and Intellij
- Users will be able to easily download and access the code review bot. For example, users will be able to download it from the VScode extension market.

### Commit Detection
- The code review bot will continuously mointor the user's code to check for commits.

### Intervention on Commit
- When a users makes a commit in their IDE, the code review bot will intervene and review the code before allowing that commit to go through.
- The user will be able to modify their code and then confirm the commit after reviewing the chatbot's suggestions.

### Code Review Suggestion
- The code review chatbot will provide developers with a variety of suggestions to help improve their code.  These suggestions will help developers improve the quality, readability, and maintainability of their code.
- Formatting Suggestions:  The code review bot will pick up on errors in formatting such as indentation issues.  The chatbot will show the user where these errors in formatting are and how they can solve them.
- Semicolon Usage: The review bot will pick up on missing or improperly used semicolons.  It will show the user where they may have missed a semicolon in their code.
- Variable Naming Conventions:  If the code review bot finds poorly named varibales or varibales that are too similar to each otehr it will suggest better names to the user.
- Redundancy Issues: The code review bot will pick up on repeated blocks of code that could be made into a funtion to reduce the amount of duplicate code.
- Buggy or broken code:  The code review bot will pick up on code that could cause errors or may have unintended effects.  The bot will point the areas of broken code out to the developer and explain to them why it may lead to issues within the program/application they are creating.

### JSON Checklist
- After the code review bots analysis is complete it will provide a checklist of potential improvements theat could be made within the code.  
- This checklist will be given in JSON format.

### Chatbot Conversation
- The user will be able to converse with the chatbot after it is done it's initial analysis of the users code.  The user will be able to ask the chatbot for additional explanations and suggestions regarding their code. The chat bot will be able to answer these questions and provide the user with the information they asked.

### ChatGPT Integration
- The code bot will need to integrate with ChatGPT in order to provide sophisticated and accurate repsonses in a chat like manner.

### Backend API Server
- The code review bot will implement a backend API server to securely store and manage the OpenAI token.
- Ensure that the token management is user-friendly and secure.

## Non-Functional

### Performance
- Load Speeds: The chatbot will respond within 3 seconds of intervening the commit.
- Scalability: The chatbot will be able to manage 1,000 consecutive requests.

### Comment Suggestions
- To help other developers better understand the users code the bot will suggest spots the user should add comments.  For example, the bot will pick up on complex sections of the code and will suggest a comment for the user to add before the complex code block.

### Security Suggestions
- The code review bot will check for security vulnerabilities in the users code. For example, the bot may point out a chunk of code that is vulnerable to SQL injection attacks and give a suggestion on how to make the code more secure. 

### Error Handling Suggestions
- The codebot will suggest places the user can add error handling to help stop the program from crashing and creating a better user experience when unexpected errors occur.