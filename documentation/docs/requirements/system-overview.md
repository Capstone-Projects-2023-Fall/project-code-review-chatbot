---
sidebar_position: 1
---

# System Overview

## Project Abstract
Code review plays a pivotal role in software development, especially in larger team settings. However, code reviews often go overlooked, with team members frequently responding with "LGTM" (Looks Good To Me) without thoroughly reviewing the code. Our project alleviates this issue by introducing a chatbot within the user's IDE to conduct preliminary code reviews before it is submitted for peer review. This extension aims to improve code quality and also educate users on effective code review practices within their teams. 

## Top Level Requirements
Users should be able to install the chatbot in their IDE of choice. The chatbot extension will be installed in their IDE and wait for a commit intent. When a user attempts to commit their code, the chatbot will intervene by providing a code review with actionable suggestions. Furthermore, users will have the option to engage in a conversation with the chatbot for additional explanations and insights.


![image](https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/70736675/d9edaea8-8e07-4483-8045-a454b63a07ae)

**Figure 1.** *Wireframe of design concept. The user is given feedback on their rather questionable-looking code in a VSCode extension on the righthand side by ChatGPT.*

## Conceptual Design
To implement this project, we are building upon the foundations of the VSCode ChatGPT extension developed by Tim Kmecl. Our modifications to the codebase will enable the chatbot to respond to commit events and generate code review checklists in JSON format. We will also introduce a backend API server to store our OpenAI token, simplifying the user experience. The VSCode extension will then utilize ReactJS to convert the ChatGPT response into a checklist format. 

## Background
We are a group of students with an interest in software development. In our experiences, we've noticed that many people overlook an important part of building software which is checking each other's code. 

When people work together on software, they often forget to review each other's code carefully and thoroughly. They might just say "it looks good to me" without really checking. We want to change that. 

Our project is all about making code reviews easier and more helpful. We are creating a helper, a chatbot, that will work inside users IDE. When you want to save your work, this chatbot will check it first and give you tips on how to improve your code. It is like having a coding assistant right by you. 

Our idea is to bring this feature directly into users IDE. This way, users can learn to do better code reviews and the code will be written better.
