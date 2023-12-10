
<div align="center">

# Code Review Chatbot
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2023-fall.github.io/project-code-review-chatbot/)


</div>



## Project Abstract

As a group of students, we are actively engaged in developing a project that addresses the importance of code review. Code review plays a pivotal role in software development, especially in larger team settings. However, it often goes overlooked, with team members frequently responding with "LGTM" (Looks Good To Me) without even thoroughly reviewing the code. Our project is created to alleviate this issue by introducing a chatbot within the users' IDE to conduct preliminary code reviews before it is submitted for peer review. This aims to elevate code quality and also educate users on effective code review practices within their teams. 

## High-Level Requirement

Users should be able to install the chatbot in their IDE of choice. The chatbot will live in their IDE and wait for a commit intent. When a user attempts to commit their code, the chatbot will intervene by providing a code review with actionable suggestions. Furthermore, users will have the option to engage in a conversation with the chatbot for additional explanations and insights

For example, the Code Review Chat Bot might examine poorly written code and respond with suggestions like this:

1. Indentation: It appears that there are indentation errors in your code. Proper indentation is crucial for readability and maintaining structure

2. Semicolon Usage: It is generally advisable to use semicolons in your code. Ensure you follow appropriate semicolon conventions!


## Background

We are a group of students with an interest in software development. In our experiences, we've noticed that many people overlook an important part of building software which is checking each other's code. 

When people work together on software, they often forget to review each other's code carefully and thoroughly. They might just say "it looks good to me" without really checking. We want to change that. 

Our project is all about making code reviews easier and more helpful. We are creating a helper, a chatbot, that will work inside users IDE. When you want to save your work, this chatbot will check it first and give you tips on how to improve your code. It is like having a coding assistant right by you. 

Our idea is to bring this feature directly into users IDE. This way, users can learn to do better code reviews and the code will be written better.




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


## Client Setup (dev only)

1. To run this extension from its source code, you must first run `npm i` in the root directory.
2. ChatGPT's node module does not work correctly running via source code. Run the following commands below if you are on a Linux machine.

   If you are on a machine other than Linux, following the following instructions: https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/blob/trau-update-readme/src/test/Readme.md

   ```
    sed -i "1i import fetch from 'node-fetch'" node_modules/chatgpt/build/index.js
    sed -i -e 's/var fetch = globalThis.fetch;//g' node_modules/chatgpt/build/index.js
    sed -i -e '8,13d' node_modules/chatgpt/build/index.js 
    sed -i '8i // src/tokenizer.ts\nimport GPT3TokenizerImport from "gpt3-tokenizer";\nvar GPT3Tokenizer = typeof GPT3TokenizerImport === "function" ? GPT3TokenizerImport : GPT3TokenizerImport.default;\nvar tokenizer = new GPT3Tokenizer({ type: "gpt3" });\nfunction encode(input) {\n  return tokenizer.encode(input).bpe;\n}' node_modules/chatgpt/build/index.js
    sed -i -e "s/import Keyv from 'keyv';/import * as Keyv from 'keyv';/g" node_modules/chatgpt/build/index.d.ts
    sed -i -e 's/type FetchFn = typeof fetch;/type FetchFn = any;/g' node_modules/chatgpt/build/index.d.ts
   ```

3. You can run the extension by pressing F5 on VSCode.



## Backend Setup (dev only)

1. In order to run the server client on Windows, the Windows Subsystem for Linux must be installed via PowerShell:

    `wsl --install`

2. Docker Desktop is required to be downloaded:
   
   Docker: https://www.docker.com/

3. node, npm, PHP, SQLite, and composer must be installed on your Linux subsystem.
   ```
   sudo apt-get install npm php php-curl php-xml composer
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

8. Run the following commands to generate the required dependencies. You may need to update the .env file to include database credentials.
   ```
   npm install
   npm run build
   php artisan migrate
   ```
   
9. You can run the image by navigating to /server/code-review-chatbot in your Linux console and running the following command:
   
   `./vendor/bin/sail up`

   *If you receive a docker error, you may need to modify the docker config file in ~/.docker/config.json and change credsStore to credStore*


## Backend AWS Setup (dev only)

1. To update the AWS login, run the following command within the server/code-review-chatbot directory:
   
   `./vendor/bin/vapor provider`

2. Reference the newly created provider for deployments (deletion of the previous provider may be required).


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
    <td align="center">
        <a href="https://github.com/trau3">
            <img src="https://avatars.githubusercontent.com/u/70736675?v=4" width="100;" alt="ThomasRau"/>
            <br />
            <sub><b>Thomas Rau</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/kroosvi">
            <img src="https://avatars.githubusercontent.com/u/42981577?v=4" width="100;" alt="KroosXiang"/>
            <br />
            <sub><b>Kroos Xiang</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/joshdeland">
            <img src="https://avatars.githubusercontent.com/u/97611611?v=4" width="100;" alt="JoshuaDeland"/>
            <br />
            <sub><b>Joshua Deland</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/PatrickBrady7">
            <img src="https://avatars.githubusercontent.com/u/97626904?v=4" width="100;" alt="PatrickBrady"/>
            <br />
            <sub><b>Patrick Brady</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Jshiller26">
            <img src="https://avatars.githubusercontent.com/u/72032695?v=4" width="100;" alt="JoesphShiller"/>
            <br />
            <sub><b>Joseph Shiller</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/DomenicMalinsky">
            <img src="https://avatars.githubusercontent.com/u/81871640?v=4" width="100;" alt="DomenicMalinsky"/>
            <br />
            <sub><b>Domenic Malinsky</b></sub>
        </a>
    </td>
</tr>
</table>

[//]: # ( readme: collaborators -end )
