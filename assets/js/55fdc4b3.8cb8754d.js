"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(u,s(s({ref:t},h),{},{components:a})):n.createElement(u,s({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:2},s="Sequence Diagrams",i={unversionedId:"system-architecture/sequenceDiagrams",id:"system-architecture/sequenceDiagrams",title:"Sequence Diagrams",description:"Case 1:",source:"@site/docs/system-architecture/sequenceDiagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequenceDiagrams",permalink:"/project-code-review-chatbot/docs/system-architecture/sequenceDiagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/edit/main/documentation/docs/system-architecture/sequenceDiagrams.md",tags:[],version:"current",lastUpdatedBy:"Yoonjae Jason Lee",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Component Descriptions",permalink:"/project-code-review-chatbot/docs/system-architecture/component-descriptions"},next:{title:"CRC Extension Class Diagram",permalink:"/project-code-review-chatbot/docs/system-architecture/ClassDiagram"}},l={},c=[{value:"<strong>Case 1:</strong>",id:"case-1",level:3},{value:"<strong>Case 2:</strong>",id:"case-2",level:3},{value:"<strong>Case 3:</strong>",id:"case-3",level:3},{value:"<strong>Case 4:</strong>",id:"case-4",level:3},{value:"<strong>Case 5:</strong>",id:"case-5",level:3},{value:"<strong>Case 6:</strong>",id:"case-6",level:3},{value:"<strong>Case 7:</strong>",id:"case-7",level:3},{value:"<strong>Case 8:</strong>",id:"case-8",level:3}],h={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,o.kt)("h3",{id:"case-1"},(0,o.kt)("strong",{parentName:"h3"},"Case 1:")),(0,o.kt)("p",null,"As a temple student taking coding classes, I want a convenient way to check their code to see if they did it correctly."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Student wrote some code, which looks reasonable. Then they tried to build it. It failed"),(0,o.kt)("li",{parentName:"ol"},"They installed the extension from the marketplace in vscode."),(0,o.kt)("li",{parentName:"ol"},"The user tried some features which does a explaining what their code does."),(0,o.kt)("li",{parentName:"ol"},"Extension prompts the user to sign in to use the server API."),(0,o.kt)("li",{parentName:"ol"},"The user sign in, and then the extension shows the user what their code does."),(0,o.kt)("li",{parentName:"ol"},"The user wrote some more code."),(0,o.kt)("li",{parentName:"ol"},"The user decided to build it again then failed, and asked the extension to review their code."),(0,o.kt)("li",{parentName:"ol"},"The extension gives a to-do list to the user where they can improve.\n",(0,o.kt)("img",{parentName:"li",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/42981577/288993546-d851330a-0f47-497a-90bb-f287d546e598.png",alt:"image"}))),(0,o.kt)("h3",{id:"case-2"},(0,o.kt)("strong",{parentName:"h3"},"Case 2:")),(0,o.kt)("p",null,"As a tech hobbyist but not a temple student, I don't want to open another tab outside of VS code to talk to GPT."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user installed the extension from the marketplace in vscode."),(0,o.kt)("li",{parentName:"ol"},"The user decided to use the extension to send a question to the chatGPT."),(0,o.kt)("li",{parentName:"ol"},"The user right-click on the screen and click Ask chatGPT, type in the question, and hit enter."),(0,o.kt)("li",{parentName:"ol"},"The extension prompted the user to log in to their server API."),(0,o.kt)("li",{parentName:"ol"},"The user decided to use their chatGPT API key, since he is not a temple student, he could not sign up with the server API."),(0,o.kt)("li",{parentName:"ol"},"The user stored the API key locally."),(0,o.kt)("li",{parentName:"ol"},"Then right-click on the screen and click Ask chatGPT, type in the question, and hit enter."),(0,o.kt)("li",{parentName:"ol"},"This time the question is answered by chatGPT.\n",(0,o.kt)("img",{parentName:"li",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/42981577/288994277-fc91f62f-26cd-4884-b0d7-e28683ee7166.png",alt:"image"}))),(0,o.kt)("h3",{id:"case-3"},(0,o.kt)("strong",{parentName:"h3"},"Case 3:")),(0,o.kt)("p",null,"As a temple student, he wants quick tools to help him catch small bugs as well as correct the format of their syntax."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user wrote some code and debugged them. It looked good."),(0,o.kt)("li",{parentName:"ol"},"Then he found the extension on the marketplace, it sounds promising. "),(0,o.kt)("li",{parentName:"ol"},"The user agrees to the pre-commit hook since he is working with Git."),(0,o.kt)("li",{parentName:"ol"},"Then he used his temple email to sign up for an account, then log in."),(0,o.kt)("li",{parentName:"ol"},"He decided to try this commit detection, so he committed the previous code to git."),(0,o.kt)("li",{parentName:"ol"},"Then the user was asked if they wanted a review for their code."),(0,o.kt)("li",{parentName:"ol"},"The user clicks on Yes, and the extension runs a quick review."),(0,o.kt)("li",{parentName:"ol"},"The user is given a list of things that he could improve on.\n",(0,o.kt)("img",{parentName:"li",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/42981577/288996949-e0b1fb28-6b0a-40c7-ab1e-ae5f34831b37.png",alt:"image"}))),(0,o.kt)("h3",{id:"case-4"},(0,o.kt)("strong",{parentName:"h3"},"Case 4:")),(0,o.kt)("p",null,"As a temple student, they just downloaded this extension they want to sign up for an account."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user clicks on the chatGPT icon on the left-hand side of the screen."),(0,o.kt)("li",{parentName:"ol"},"The extension prompts them to log in."),(0,o.kt)("li",{parentName:"ol"},"The user clicks on yes to follow to different tab."),(0,o.kt)("li",{parentName:"ol"},"The user clicks the sign-up button on the page."),(0,o.kt)("li",{parentName:"ol"},"The user types all the information into the box and hits submit."),(0,o.kt)("li",{parentName:"ol"},"The website tells the user to verify with their TU email."),(0,o.kt)("li",{parentName:"ol"},"The user presses send."),(0,o.kt)("li",{parentName:"ol"},"The user went into their TU email account, saw the email, and clicked on the link to verify.\n",(0,o.kt)("img",{parentName:"li",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/42981577/289001156-97bf3e79-8740-49ca-ba6d-a48dc5a6785f.png",alt:"image"}))),(0,o.kt)("h3",{id:"case-5"},(0,o.kt)("strong",{parentName:"h3"},"Case 5:")),(0,o.kt)("p",null,"As a temple student, they wanted to figure out what this code does, which they had copied from their professor during class. They had been using this extension for a while now."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user selects the code that they want to be explained."),(0,o.kt)("li",{parentName:"ol"},"Right-click on the vs code window on top of the selected text."),(0,o.kt)("li",{parentName:"ol"},"The extension sends the request to the server API."),(0,o.kt)("li",{parentName:"ol"},"Then the server will turn an answer for the given code that they had selected."),(0,o.kt)("li",{parentName:"ol"},"The extension displays the explanation in the window."),(0,o.kt)("li",{parentName:"ol"},"The user reads it and then can follow along with the code.\n",(0,o.kt)("img",{parentName:"li",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/42981577/289004794-c7dd4545-db20-4c62-944f-3233bd58c1fd.png",alt:"image"}))),(0,o.kt)("h3",{id:"case-6"},(0,o.kt)("strong",{parentName:"h3"},"Case 6:")),(0,o.kt)("p",null,"As a temple student, a long-term user of the extension. They wanted to do a write some test for the code that they just wrote but they got no idea where to begin."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start Vscode going back to the working environment."),(0,o.kt)("li",{parentName:"ol"},"Checking the code out."),(0,o.kt)("li",{parentName:"ol"},"Select the code where the user wants to write the test."),(0,o.kt)("li",{parentName:"ol"},"Right-click then click ChatGPT.TestSuggestions."),(0,o.kt)("li",{parentName:"ol"},"The extension will show all the functions to which they can add the test in.\n",(0,o.kt)("img",{parentName:"li",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/42981577/289005348-143f7db8-4871-47ce-a468-c5a1eba8f662.png",alt:"image"}))),(0,o.kt)("h3",{id:"case-7"},(0,o.kt)("strong",{parentName:"h3"},"Case 7:")),(0,o.kt)("p",null,"As a temple student, a long-term user of the extension. They wanted to do a review of the code to make it less complex, but they had no idea where to start."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start Vscode"),(0,o.kt)("li",{parentName:"ol"},"select the code that the user wants to review."),(0,o.kt)("li",{parentName:"ol"},"Log in if they haven't."),(0,o.kt)("li",{parentName:"ol"},"Then right-click the selected code."),(0,o.kt)("li",{parentName:"ol"},"Click the ChatGPT: Legibiliity Suggestions."),(0,o.kt)("li",{parentName:"ol"},"Then the extension would print out all the suggestions that they can make to the given code.\n",(0,o.kt)("img",{parentName:"li",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/42981577/289005537-48e344df-ae13-4ba2-a763-5cb412871548.png",alt:"image"}))),(0,o.kt)("h3",{id:"case-8"},(0,o.kt)("strong",{parentName:"h3"},"Case 8:")),(0,o.kt)("p",null,"The user wants an instance of ChatGPT in their vs code. So they don't have to go out of vs code to talk to chatGPT."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"start VS code"),(0,o.kt)("li",{parentName:"ol"},"log in to the server if they haven't."),(0,o.kt)("li",{parentName:"ol"},"Right-click any open window, or type in the command palette: chatgpt.start."),(0,o.kt)("li",{parentName:"ol"},"Then a window will persist in the vs code tab until the user decides to close it."),(0,o.kt)("li",{parentName:"ol"},"Then the user can type in anything that they want to ask chatGPT."),(0,o.kt)("li",{parentName:"ol"},"Once they hit enter or click the submit button, the entry will be sent to the server API.\n",(0,o.kt)("img",{parentName:"li",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/42981577/289006018-02a6c187-719f-4619-acf1-be6c17c574d6.png",alt:"image"}))))}d.isMDXComponent=!0}}]);