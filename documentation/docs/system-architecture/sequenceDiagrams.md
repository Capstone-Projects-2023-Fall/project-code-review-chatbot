---
sidebar_position: 2
---

# Use-case descriptions

### **Case 1:**
As a temple student taking coding classes, I want a convenient way to check their code to see if they did it correctly.
1. Student wrote some code, which looks reasonable. Then they tried to build it. It failed
2. They installed the extension from the marketplace in vscode.
3. The user tried some features which does a explaining what their code does.
4. Extension prompts the user to sign in to use the server API.
5. The user sign in, and then the extension shows the user what their code does.
6. The user wrote some more code.
7. The user decided to build it again then failed, and asked the extension to review their code.
8. The extension gives a to-do list to the user where they can improve.
<img width="871" alt="image" src="https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/42981577/d851330a-0f47-497a-90bb-f287d546e598">




### **Case 2:**
As a tech hobbyist but not a temple student, I don't want to open another tab outside of VS code to talk to GPT.
1. The user installed the extension from the marketplace in vscode.
2. The user decided to use the extension to send a question to the chatGPT.
3. The user right-click on the screen and click Ask chatGPT, type in the question, and hit enter.
4. The extension prompted the user to log in to their server API.
5. The user decided to use their chatGPT API key, since he is not a temple student, he could not sign up with the server API.
6. The user stored the API key locally.
7. Then right-click on the screen and click Ask chatGPT, type in the question, and hit enter.
8. This time the question is answered by chatGPT.

### **Case 3:**
As a temple student, he wants quick tools to help him catch small bugs as well as correct the format of their syntax.
1. The user wrote some code and debugged them. It looked good.
2. Then he found the extension on the marketplace, it sounds promising. 
3. The user agrees to the pre-commit hook since he is working with Git.
4. Then he used his temple email to sign up for an account, then log in.
5. He decided to try this commit detection, so he committed the previous code to git.
6. Then the user was asked if they wanted a review for their code.
7. The user clicks on Yes, and the extension runs a quick review.
8. The user is given a list of things that he could improve on.

### **Case 5:**
As a temple student, they just downloaded this extension they want to sign up for an account.
1. The user clicks on the chatGPT icon on the left-hand side of the screen.
2. The extension prompts them to log in.
3. The user clicks on yes to follow to different tab.
4. The user clicks the sign-up button on the page.
5. The user types all the information into the box and hits submit.
6. The website tells the user to verify with their TU email.
7. The user presses send.
8. The user went into their TU email account, saw the email, and clicked on the link to verify.

### **Case 6:**
As a temple student, they wanted to figure out what this code does, which they had copied from their professor during class. They had been using this extension for a while now.
1. The user selects the code that they want to be explained.
2. Right-click on the vs code window on top of the selected text.
3. The extension sends the request to the server API.
4. Then the server will turn an answer for the given code that they had selected.
5. The extension displays the explanation in the window.
6. The user reads it and then can follow along with the code.

### **Case 7:**
As a temple student, a long-term user of the extension. They wanted to do a write some test for the code that they just wrote but they got no idea where to begin.

1. Start Vscode going back to the working environment.
2. Checking the code out.
3. Select the code where the user wants to write the test.
4. Right-click then click ChatGPT.TestSuggestions.
5. The extension will show all the functions to which they can add the test in.

### **Case 8:**
As a temple student, a long-term user of the extension. They wanted to do a review of the code to make it less complex, but they had no idea where to start.

1. Start Vscode
2. select the code that the user wants to review.
3. Log in if they haven't.
4. Then right-click the selected code.
5. Click the ChatGPT: Legibiliity Suggestions.
6. Then the extension would print out all the suggestions that they can make to the given code.

### **Case 9:**
The user wants an instance of ChatGPT in their vs code. So they don't have to go out of vs code to talk to chatGPT.

1. start VS code
2. log in to the server if they haven't.
3. Right-click any open window, or type in the command palette: chatgpt.start.
4. Then a window will persist in the vs code tab until the user decides to close it.
5. Then the user can type in anything that they want to ask chatGPT.
6. Once they hit enter or click the submit button, the entry will be sent to the server API.

