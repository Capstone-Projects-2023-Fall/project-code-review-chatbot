"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4195],{9337:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){function t(){return t=e.id?e.id:(t=(t=(t=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return a.createElement("figure",{id:t(),align:e.align?e.align:"center",style:e.style?e.style:{}},e.children,e.src?a.createElement("img",{src:e.src,alt:e.alt}):a.createElement(a.Fragment,null),a.createElement("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"}},e.caption),a.createElement("figcaption",{align:e.align?e.align:"center",style:{}},e.subcaption))}},8140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(7294),r=n(6010),o=n(9960),i=n(2263),l=n(782),s=n(7462),c=n(3905);const u={toc:[{value:"Backend Setup",id:"backend-setup",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Project Abstract",id:"project-abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2},{value:"Required Resources",id:"required-resources",level:2},{value:"Collaborators",id:"collaborators",level:2}]};function d(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("div",{align:"center"},(0,c.kt)("h1",{id:"code-review-chatbot"},"Code Review Chatbot"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software",alt:"Report Issue on Jira"})),"\n",(0,c.kt)("a",{parentName:"p",href:"https://capstone-projects-2023-fall.github.io/project-code-review-chatbot/"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Documentation%20Website-brightgreen",alt:"Documentation Website Link"})))),(0,c.kt)("h1",{id:"installation-instructions"},"Installation Instructions"),(0,c.kt)("h2",{id:"backend-setup"},"Backend Setup"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"In order to run the server client on Windows, the Windows Subsystem for Linux must be installed via PowerShell:"),(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"wsl --install"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Docker Desktop is required to be downloaded:"),(0,c.kt)("p",{parentName:"li"},"Docker: ",(0,c.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"https://www.docker.com/"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"node, npm, PHP, SQLite, and composer must be installed on your Linux subsystem."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre"},"sudo apt-get install npm php php-curl php-xml composer sqlite3 php-sqlite3\n"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"After installation, clone the repo into your Linux subsystem. (directory ex: ","\\","\\","wsl.localhost\\Ubuntu\\home\\user)")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Navigate to /server/code-review-chatbot and run the following command:"),(0,c.kt)("p",{parentName:"li"}," ",(0,c.kt)("inlineCode",{parentName:"p"},"composer update")),(0,c.kt)("p",{parentName:"li"},(0,c.kt)("em",{parentName:"p"},"If you receive a permission error, you may need to change the owner of the files to the current user."))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"To generate a new application key upon cloning, you must run the following commands:"),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre"},"cp .env.example .env\nphp artisan key:generate\n"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Run the following commands to generate the required dependencies:"),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre"},"npm install\nnpm run build\nphp artisan migrate\n"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"You can run the image by navigating to /server/code-review-chatbot in your Linux console and running the following command:"),(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"./vendor/bin/sail up")),(0,c.kt)("p",{parentName:"li"},(0,c.kt)("em",{parentName:"p"},"If you receive a docker error, you may need to modify the docker config file in ~/.docker/config.json and change credsStore to credStore")))),(0,c.kt)("h2",{id:"keywords"},"Keywords"),(0,c.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,c.kt)("p",null,'As a group of students, we are actively engaged in developing a project that addresses the importance of code review. Code review plays a pivotal role in software development, especially in larger team settings. However, it often goes overlooked, with team members frequently responding with "LGTM" (Looks Good To Me) without even thoroughly reviewing the code. Our project is created to alleviate this issue by introducing a chatbot within the users IDE to conduct preliminary code reviews before it is submitted for peer review. This aims to elevate code quality and also educate users on effective code review practices within their teams. '),(0,c.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,c.kt)("p",null,"Users should be able to install the chatbot in their IDE of choice. The chatbot will live in their IDE and wait for a commit intent. When a user attempts to commit their code, the chatbot will intervene by providing a code review with actionable suggestions. Furthermore, users will have the option to engage in a conversation with the chatbot for additional explanations and insights"),(0,c.kt)("p",null,"For example, the Code Review Chat Bot might examine poorly written code and respond with suggestions like this:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Indentation: It appears that there are indentaion errors in your code. Proper indentation is crucial for readability and maintaining structure")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Semicolon Usage: It is generally advisable to use semicolons in your code. Ensure you follow appropriate semicolon conventions!"))),(0,c.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,c.kt)("p",null,"To implement this project, we are buliding upon the foundations of the VSCode ChatGPT extension developed by Tim Kmecl. Our modifications to the codebase will enable the chatbot to respond to commit events and generate code review checklists in JSON format. We will also introduce a backend API server to store our OpenAI token, simplifying the user experience. The VSCode extension will then utilized ReactJS to convert the JSON reponse into a checklist format. "),(0,c.kt)("h2",{id:"background"},"Background"),(0,c.kt)("p",null,"We are a group of studnets with interest in software development. In our experiences, we've notice that many people overlook an important part of building software which is checking each others code. "),(0,c.kt)("p",null,'When people work together on a software, they often forget to review each other\'s code carefully and thoroughly. They might just say "it looks good to me" without really checking. We want to change that. '),(0,c.kt)("p",null,"Our project is all about making code reviews easier and more helpful. We are creating a helper, a chatbot, that will work inside users IDE. When you want to save your work, this chatbot will check it first and give you tips on how to improve your code. It is like having a coding assistant right by you. "),(0,c.kt)("p",null,"Our idea is to bring this feature directly into users IDE. This way, users can learn to do better code reviews and the code will be written better."),(0,c.kt)("h2",{id:"required-resources"},"Required Resources"),(0,c.kt)("h2",{id:"collaborators"},"Collaborators"),(0,c.kt)("table",null,(0,c.kt)("tr",null,(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/yoonjaejasonlee"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/97626684?v=4",width:"100;",alt:"JasonLee"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Jason Lee")))))))}function p(){return a.createElement("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"}},a.createElement(d,null))}d.isMDXComponent=!0;const m="heroBanner_qdFl",h="buttons_AeoN";var k=n(6706);function g(){const{siteConfig:e}=(0,i.Z)();return a.createElement("header",{className:(0,r.Z)("hero hero--primary",m)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:h},a.createElement(o.Z,{className:"button button--secondary button--lg",to:"/tutorial/intro"},"Docusaurus Tutorial - 5min \u23f1\ufe0f"))))}function A(){const{siteConfig:e}=(0,i.Z)();return a.createElement(l.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},a.createElement(g,null),a.createElement("main",null,a.createElement(k.Z,null,a.createElement(p,null))))}},6706:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(4912);function o(e){return a.createElement(a.Fragment,null,a.createElement(r.Z,e))}},6922:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(9337),o=n(9676);const i={React:a,...a,Figure:r.Z,dinosaur:o.Z}},9676:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);