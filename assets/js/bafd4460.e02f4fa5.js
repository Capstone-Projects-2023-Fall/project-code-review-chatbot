"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,p=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return n?o.createElement(p,a(a({ref:t},u),{},{components:n})):o.createElement(p,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},a="Features and Requirements",l={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-code-review-chatbot/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"trau3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-code-review-chatbot/docs/requirements/general-requirements"},next:{title:"Use-case descriptions",permalink:"/project-code-review-chatbot/docs/requirements/use-case-descriptions"}},s={},c=[{value:"Functional",id:"functional",level:2},{value:"VSCode Integration",id:"vscode-integration",level:3},{value:"Commit Detection",id:"commit-detection",level:3},{value:"Intervention on Commit",id:"intervention-on-commit",level:3},{value:"Code Review Suggestion",id:"code-review-suggestion",level:3},{value:"Improvement Checklist",id:"improvement-checklist",level:3},{value:"Chatbot Conversation",id:"chatbot-conversation",level:3},{value:"Backend API Server",id:"backend-api-server",level:3},{value:"Non-Functional",id:"non-functional",level:2},{value:"Performance",id:"performance",level:3},{value:"ChatGPT Integration",id:"chatgpt-integration",level:3},{value:"Comment Suggestions",id:"comment-suggestions",level:3},{value:"JSON Checklist",id:"json-checklist",level:3},{value:"Security Suggestions",id:"security-suggestions",level:3},{value:"Error Handling Suggestions",id:"error-handling-suggestions",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,i.kt)("h2",{id:"functional"},"Functional"),(0,i.kt)("h3",{id:"vscode-integration"},"VSCode Integration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code review bot will be integrated into VSCode IDE.  This intergration will allow users to perform code reviews directly inside of their IDE when using VSCode.  "),(0,i.kt)("li",{parentName:"ul"},"A VSCode extension must be created and puublished onto the VSCode extension marketplace so users can easily download and use the code review chatbot.")),(0,i.kt)("h3",{id:"commit-detection"},"Commit Detection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code review bot will continuously monitor the user's code to check for commits.")),(0,i.kt)("h3",{id:"intervention-on-commit"},"Intervention on Commit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When a users makes a commit in their IDE, the code review bot will automatically intervene and perform a code review.  The user can then decide whether to make the suggested changes before pushing the changes to a git repository."),(0,i.kt)("li",{parentName:"ul"},"The user will be able to modify their code and then confirm the commit after reviewing the chatbot's suggestions.")),(0,i.kt)("h3",{id:"code-review-suggestion"},"Code Review Suggestion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code review chatbot will provide developers with a variety of suggestions to help improve their code.  These suggestions will help developers improve the quality, readability, and maintainability of their code."),(0,i.kt)("li",{parentName:"ul"},"Variable Naming Conventions:  If the code review bot finds poorly named varibales or varibales that are too similar to each otehr it will suggest better names to the user."),(0,i.kt)("li",{parentName:"ul"},"Redundancy Issues: The code review bot will pick up on repeated blocks of code that could be made into a funtion to reduce the amount of duplicate code."),(0,i.kt)("li",{parentName:"ul"},"Buggy or broken code:  The code review bot will pick up on code that could cause errors or may have unintended effects.  The bot will point the areas of broken code out to the developer and explain to them why it may lead to issues within the program/application they are creating."),(0,i.kt)("li",{parentName:"ul"},"Test Recommendations: The code review bot will suggest different unit tests developers can implement to help with code readability and functionality."),(0,i.kt)("li",{parentName:"ul"},"Complexity: If the code review bot picks up on a complex block of code it will suggest ways to simplify the code in order to make the code easier to maintain and improve readability."),(0,i.kt)("li",{parentName:"ul"},"Legibility: In cases where code is tough to understand, the code review bot will suggest improvements in code structure and may suggest comments the developer can add.  Users will be able to toggle the bots comment suggestions as some organization do not want comments in there code.     ")),(0,i.kt)("h3",{id:"improvement-checklist"},"Improvement Checklist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After the code review bot completes its analysis, it will provide a checklist of potential improvements that could be made within the code.  ")),(0,i.kt)("h3",{id:"chatbot-conversation"},"Chatbot Conversation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user will be able to converse with the chatbot after it has done its initial analysis of the user's code.  The user will be able to ask the chatbot for additional explanations and suggestions regarding their code. The chatbot will be able to answer these questions and provide the user with the information they asked.")),(0,i.kt)("h3",{id:"backend-api-server"},"Backend API Server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code review bot will implement a backend API server to securely store and manage the OpenAI token."),(0,i.kt)("li",{parentName:"ul"},"Ensure that the token management is user-friendly and secure.")),(0,i.kt)("h2",{id:"non-functional"},"Non-Functional"),(0,i.kt)("h3",{id:"performance"},"Performance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load Speeds: The chatbot will respond within 3 seconds of intervening the commit."),(0,i.kt)("li",{parentName:"ul"},"Scalability: The chatbot will be able to manage 1,000 consecutive requests.")),(0,i.kt)("h3",{id:"chatgpt-integration"},"ChatGPT Integration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code bot will need to integrate with ChatGPT in order to provide sophisticated and accurate repsonses in a chat like manner.")),(0,i.kt)("h3",{id:"comment-suggestions"},"Comment Suggestions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To help other developers better understand the user's code the bot will suggest spots the user should add comments.  For example, the bot will pick up on complex sections of the code and will suggest a comment for the user to add before the complex code block.")),(0,i.kt)("h3",{id:"json-checklist"},"JSON Checklist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code review bots improvement checklist will be given in JSON format.")),(0,i.kt)("h3",{id:"security-suggestions"},"Security Suggestions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code review bot will check for security vulnerabilities in the user's code. For example, the bot may point out a chunk of code that is vulnerable to SQL injection attacks and give a suggestion on how to make the code more secure. ")),(0,i.kt)("h3",{id:"error-handling-suggestions"},"Error Handling Suggestions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The codebot will suggest places the user can add error handling to help stop the program from crashing and creating a better user experience when unexpected errors occur")))}d.isMDXComponent=!0}}]);