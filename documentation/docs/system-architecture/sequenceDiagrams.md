---
sidebar_position: 2
---

# Sequence Diagrams

## Use Case 1
**A student has just started taking coding classes. They are completely new to coding and want to have a convenient way to learn proper code etiquette & styles**

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/e8e4242aab94a042ef85edc96bacf87f56c8d669/documentation/static/img/SequenceDiagram1.png)

1. Student tries their first class assignment and commits the code
2. Extension finds various issues, but only send the user 2 suggestions
3. Student receives feedback from extension
4. Student implements the suggestions
5. Student repeats process
6. Student now has a conveinent way to learn on their own time

### Use Case 2
**A fresh university graduate has landed a job but is concerned about how their new co-workers will judge their code**

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/e8e4242aab94a042ef85edc96bacf87f56c8d669/documentation/static/img/SequenceDiagram2.png)

1. Graduate takes their existing, working code and compiles it
2. CodeReview finds ways to improve readability to professional standards
3. CodeReview sends suggestions to the user.
4. User makes changes and takes note of the suggestions so they can not make these mistakes later
5. User now has a way to make a database of making and maintaining clean code

### Use Case 3
**A computer science student who loves to code but has difficulties writing efficient and organized code**

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/e8e4242aab94a042ef85edc96bacf87f56c8d669/documentation/static/img/SequenceDiagram3.png)

1. Sarah downloads and installs the ChatGPT Code Review Extension from the Visual Studio Code marketplace. The installation is quick and seamless.
2. With her assignment code open in Visual Studio Code, Sarah activates the ChatGPT extension by clicking the chat icon in the sidebar. She submits her code for review, specifying the programming language she's using and attaching a brief description of the assignment's requirements.
3. ChatGPT quickly analyzes her code and provides feedback within seconds. It highlights potential issues, such as inefficient algorithms, naming conventions, and code readability problems.
4. Sarah engages in an interactive discussion with ChatGPT. She asks specific questions about the highlighted issues to gain a deeper understanding of the recommendations. ChatGPT responds with clear explanations, examples, and links to relevant documentation.
5. Using the guidance from ChatGPT, Sarah makes iterative improvements to her code. She receives real-time feedback as she implements changes, ensuring she's on the right track.
6. After several rounds of interaction and code improvements, Sarah is satisfied with her code's quality. She submits her assignment, confident that it meets the required standards.

### Use Case 4
**User gets stuck on an error while coding a perosnal project**

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/e8e4242aab94a042ef85edc96bacf87f56c8d669/documentation/static/img/SequenceDiagram4.png)

1. User finds errors in running their code
2. User searches online for a quick fix, but is having trouble finding a simple fix
3. User is prompted by extension if they need help
4. User agrees, and is prompted with a potential fix
5. Extension informs user of the syntax error and how to solve it
6. User is given the suggestion on how to write some tests to mitigate these issues in the future
7. User fixes error and code now compiles, thus saving them time in their busy life

### Use Case 5
**Experienced programmer uses bot to proof code before pushing**

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/main/documentation/static/img/sequenceDiagram5.png)

1. Bob goes to commit work
2. CodeReviewChatbot catches the commit process, and sends bob feedback on his work
3. The commit is halted, as now Bob wants to fix his work
4. Bob commits again, fixing his work. This time he receives little feedback
5. Bob now feels confident in pushing his work

### Use Case 6
**Code Review Bot lets user know they are using bad practice by writing all code in main function**

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/e8e4242aab94a042ef85edc96bacf87f56c8d669/documentation/static/img/SequenceDiagram6.png)

1. Anna works on code for a couple hours and decides to commit her work
2. CodeReviewChatbot catches the commit process, and sends anna feedback
3. Specifically, CodeReviewChatbot informs anna of code that she has repeated throughout her program
4. Then CodeReviewChatbot suggests making some functions
5. Anna implements this, making her code shorter, more concise, and overall less repetitive

### Use Case 7
**User converses with chatbot on how to improve code after initial commit**

![image](https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/e8e4242aab94a042ef85edc96bacf87f56c8d669/documentation/static/img/SequenceDiagram7.png)

1. Nai writes a couple of comments into pre-existing code to have a commit
2. CodeReviewChatbot catches the commit process, and sends Nai feedback on their work
3. The commit is halted and Nai wants further explanations of the feedback
4. CodeReviewChatbot further explains the suggestions made
5. Nai now asks again where the suggestions are coming from and if they are alternatives
6. CodeReviewChatbot answers the additional questions and gives Nai more information
