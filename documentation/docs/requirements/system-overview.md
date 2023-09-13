---
sidebar_position: 1
---

# System Overview

## Project Abstract
As a group of students, we are actively engaged in developing a project that addresses the importance of code review. Code review plays a pivotal role in software development, especially in larger team settings. However, it often goes overlooked, with team members frequently responding with "LGTM" (Looks Good To Me) without even thoroughly reviewing the code. Our project is created to alleviate this issue by introducing a chatbot within the users IDE to conduct preliminary code reviews before it is submitted for peer review. This aims to elevate code quality and also educate users on effective code review practices within their teams. 

## Top Level Requirements
Users should be able to install the chatbot in their IDE of choice. The chatbot will live in their IDE and wait for a commit intent. When a user attempts to commit their code, the chatbot will intervene by providing a code review with actionable suggestions. Furthermore, users will have the option to engage in a conversation with the chatbot for additional explanations and insights

For example, the Code Review Chat Bot might examine poorly written code and respond with suggestions like this:

1. Indentation: It appears that there are indentaion errors in your code. Proper indentation is crucial for readability and maintaining structure

2. Semicolon Usage: It is generally advisable to use semicolons in your code. Ensure you follow appropriate semicolon conventions!

## Conceptual Design
To implement this project, we are buliding upon the foundations of the VSCode ChatGPT extension developed by Tim Kmecl. Our modifications to the codebase will enable the chatbot to respond to commit events and generate code review checklists in JSON format. We will also introduce a backend API server to store our OpenAI token, simplifying the user experience. The VSCode extension will then utilized ReactJS to convert the JSON reponse into a checklist format. 

## Background
We are a group of studnets with interest in software development. In our experiences, we've notice that many people overlook an important part of building software which is checking each others code. 

When people work together on a software, they often forget to review each other's code carefully and thoroughly. They might just say "it looks good to me" without really checking. We want to change that. 

Our project is all about making code reviews easier and more helpful. We are creating a helper, a chatbot, that will work inside users IDE. When you want to save your work, this chatbot will check it first and give you tips on how to improve your code. It is like having a coding assistant right by you. 

Our idea is to bring this feature directly into users IDE. This way, users can learn to do better code reviews and the code will be written better.