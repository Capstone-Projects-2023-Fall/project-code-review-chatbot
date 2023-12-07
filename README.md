
<div align="center">

# Code Review Chatbot
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2023-fall.github.io/project-code-review-chatbot/)


</div>

# Installation Instructions

## Client Setup

1. To Install this extension, you can install the extension from this link:

    https://marketplace.visualstudio.com/items?itemName=CIS4398.CRC-CIS4398-Fall2023

   You can also install this via VSCode. In Visual Studio Code, navigate to the extensions tab. Search for "CIS4398" and install the extension
   
   ![image](https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/70736675/02205b36-b438-4494-b11f-65d38f5f3161)

   
3. After installation, you should be prompted to register on the website. Create an account using a temple email before using the extension.
   If you are not prompted, you can access the accounts button on VSCode and register by clicking the "Sign in with Code Review Chatbot Auth to use Code Review Chatbot" button
   
   ![image](https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/70736675/d19de7c5-e9f7-478b-a6c9-35719ea61af9)

4. After logging in, you will be prompted to open Visual Studio Code again to authenticate. Please click confirm on each prompt.

5. When launching a new folder connected with git, you will be prompted to enable pre-commit hooks. If you would like the extension to do a code review whenever you commit, click yes on the prompt.
   
   ![image](https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/70736675/ecf1af9b-d86a-49e4-a59c-8efceb82bf28)


6. To use your own API key, change the ChatGPT model, or disable/enable your pre-commit hook, you can change these in the settings screen of the extension:
   
   ![image](https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/70736675/83d8a75a-95ec-4d9d-9bbf-e349cf6199f3)



## Backend Setup (dev only)

1. In order to run the server client on Windows, the Windows Subsystem for Linux must be installed via PowerShell:

    `wsl --install`

2. Docker Desktop is required to be downloaded:
   
   Docker: https://www.docker.com/

3. node, npm, PHP, SQLite, and composer must be installed on your Linux subsystem.
   ```
   sudo apt-get install npm php php-curl php-xml composer sqlite3 php-sqlite3
   ```
   
5. After installation, clone the repo into your Linux subsystem. (directory ex: \\\\wsl.localhost\Ubuntu\home\user)

6. Navigate to /server/code-review-chatbot and run the following command:

    `composer update`

   *If you receive a permission error, you may need to change the owner of the files to the current user.*

7. To generate a new application key upon cloning, you must run the following commands:

   ```
   cp .env.example .env
   php artisan key:generate
   ```

8. Run the following commands to generate the required dependencies:
   ```
   npm install
   npm run build
   php artisan migrate
   ```
   
9. You can run the image by navigating to /server/code-review-chatbot in your Linux console and running the following command:
   
   `./vendor/bin/sail up`

   *If you receive a docker error, you may need to modify the docker config file in ~/.docker/config.json and change credsStore to credStore*


## Keywords



## Project Abstract

As a group of students, we are actively engaged in developing a project that addresses the importance of code review. Code review plays a pivotal role in software development, especially in larger team settings. However, it often goes overlooked, with team members frequently responding with "LGTM" (Looks Good To Me) without even thoroughly reviewing the code. Our project is created to alleviate this issue by introducing a chatbot within the users IDE to conduct preliminary code reviews before it is submitted for peer review. This aims to elevate code quality and also educate users on effective code review practices within their teams. 

## High Level Requirement

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

## Required Resources

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/yoonjaejasonlee">
            <img src="https://avatars.githubusercontent.com/u/97626684?v=4" width="100;" alt="JasonLee"/>
            <br />
            <sub><b>Jason Lee</b></sub>
        </a>
    </td>
</tr>
</table>

[//]: # ( readme: collaborators -end )
