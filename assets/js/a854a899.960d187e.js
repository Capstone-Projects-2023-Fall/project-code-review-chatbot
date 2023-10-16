"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},a="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-code-review-chatbot/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"DomenicMalinsky",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-code-review-chatbot/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-code-review-chatbot/docs/requirements/system-block-diagram"}},c={},l=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Top Level Requirements",id:"top-level-requirements",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-overview"},"System Overview"),(0,n.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,n.kt)("p",null,'Code review plays a pivotal role in software development, especially in larger team settings. However, code reviews often go overlooked, with team members frequently responding with "LGTM" (Looks Good To Me) without thoroughly reviewing the code. Our project alleviates this issue by introducing a chatbot within the user\'s IDE to conduct preliminary code reviews before it is submitted for peer review. This extension aims to improve code quality and also educate users on effective code review practices within their teams. '),(0,n.kt)("h2",{id:"top-level-requirements"},"Top Level Requirements"),(0,n.kt)("p",null,"Users should be able to install the chatbot in their IDE of choice. The chatbot extension will be installed in their IDE and wait for a commit intent. When a user attempts to commit their code, the chatbot will intervene by providing a code review with actionable suggestions. Furthermore, users will have the option to engage in a conversation with the chatbot for additional explanations and insights."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/70736675/d9edaea8-8e07-4483-8045-a454b63a07ae",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 1.")," ",(0,n.kt)("em",{parentName:"p"},"Wireframe of design concept. The user is given feedback on their rather questionable-looking code in a VSCode extension on the righthand side by ChatGPT.")),(0,n.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,n.kt)("p",null,"To implement this project, we are building upon the foundations of the VSCode ChatGPT extension developed by Tim Kmecl. Our modifications to the codebase will enable the chatbot to respond to commit events and generate code review checklists in JSON format. We will also introduce a backend API server to store our OpenAI token, simplifying the user experience. The VSCode extension will then utilize ReactJS to convert the ChatGPT response into a checklist format. "),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"We are a group of students with an interest in software development. In our experiences, we've noticed that many people overlook an important part of building software which is checking each other's code. "),(0,n.kt)("p",null,'When people work together on software, they often forget to review each other\'s code carefully and thoroughly. They might just say "it looks good to me" without really checking. We want to change that. '),(0,n.kt)("p",null,"Our project is all about making code reviews easier and more helpful. We are creating a helper, a chatbot, that will work inside users IDE. When you want to save your work, this chatbot will check it first and give you tips on how to improve your code. It is like having a coding assistant right by you. "),(0,n.kt)("p",null,"Our idea is to bring this feature directly into users IDE. This way, users can learn to do better code reviews and the code will be written better."))}p.isMDXComponent=!0}}]);