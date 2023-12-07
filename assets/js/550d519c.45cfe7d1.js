"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),l=d(n),p=s,m=l["".concat(c,".").concat(p)]||l[p]||u[p]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:s,r[1]=a;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(7462),s=(n(7294),n(3905));const i={},r="Class Diagram",a={unversionedId:"system-architecture/ClassDiagram",id:"system-architecture/ClassDiagram",title:"Class Diagram",description:"image",source:"@site/docs/system-architecture/ClassDiagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/ClassDiagram",permalink:"/project-code-review-chatbot/docs/system-architecture/ClassDiagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/edit/main/documentation/docs/system-architecture/ClassDiagram.md",tags:[],version:"current",lastUpdatedBy:"yoonjaejasonlee",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Sequence Diagrams",permalink:"/project-code-review-chatbot/docs/system-architecture/sequenceDiagrams"},next:{title:"Database Diagram",permalink:"/project-code-review-chatbot/docs/system-architecture/database-diagram"}},c={},d=[{value:"vscode.ExtensionContext",id:"vscodeextensioncontext",level:2},{value:"ChatGPTViewProvider",id:"chatgptviewprovider",level:2},{value:"vscode.window",id:"vscodewindow",level:2},{value:"vscode.commands",id:"vscodecommands",level:2},{value:"ChatGPTAPI",id:"chatgptapi",level:2},{value:"Settings",id:"settings",level:2},{value:"AuthInfo",id:"authinfo",level:2}],h={toc:d};function l(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"class-diagram"},"Class Diagram"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/main/documentation/static/img/ClassDiagram.png",alt:"image"})),(0,s.kt)("h2",{id:"vscodeextensioncontext"},"vscode.ExtensionContext"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This class is provided to us by the vscode extension framework.\nIt serves as the context for for our extension and allows us to interact with the VS Code environment, register commands, and manage any other part of our extension that must interact with the VS Code IDE.\nWhen the extension is started the vscode.ExtensionContext class is activated which allows us to initialize and set up the extension.\n")),(0,s.kt)("h2",{id:"chatgptviewprovider"},"ChatGPTViewProvider"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"The ChatGPTViewProvider class is responsible for managing the webview inside of our extension which allows the users to read the code reviews from ChatGPT and interact with the chat bot.\nThis class is the core of the extension and is responsible for handling many different aspects of the extension.\n\n- **setAuthenticationInfo:** This function is responsible for setting the API key and initializing the chatGPT API.\n- **sendWebviewMessage:** The sendWebViewMessage method provides the functionality to send mesages to the webview, so the code review bot can communciate with the extension.\n- **setSettings:** The setSettings function allows the user to configure the extensions settings including an option to use the server's API, modify prompts, and other behavior.\n- **resolveWebviewView:**  This function is responsible for setting up the webview view by defining it's HTML content and handling incoming messages from the code review bot (chatGPT).\n- **resetConversation:** Provides the functionality to clear and reset the conversation with the code review bot.  The function will clear the user input and responses from the chatbot making the bot ready for a fresh conversation.\n- **search:** The search function is responsible for managing the chatbot by feeding the chatbot the correct prompt selected by the user and combining it with the users selecetd code or entire file.\n")),(0,s.kt)("h2",{id:"vscodewindow"},"vscode.window"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"The vscode.window class is part of the VS Code extension API and provides methods to interact with the VS Code window and its components.\nIn the extension it is used to show users the different code review options the extension contains when they highlight code and right click.\nThe input box the user can use to ask follow up questions to the chat bot is also craeted by this class.\nThe extension also uses this class to display a variety of error messages in case something goes wrong while using the extension.\nThe vscode.window class helps us to work with the currently active text editor and document, allowing the extension to pick up the code the user has written out in the IDE.\n")),(0,s.kt)("h2",{id:"vscodecommands"},"vscode.commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'The vscode.commands class is also part of the VS Code exntension API.\nIt is used to register and execute custom commands included in the extension.\nWe use two of the classes functions, "registerCommand" and "executeCommand".\nThese functions allow us to add new commands to the extension such as the "Code Review" and "Test Suggestions" commands.\n')),(0,s.kt)("h2",{id:"chatgptapi"},"ChatGPTAPI"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"The ChatGPTAPI class is used to interact with OpenAI's ChatGPT.\nThis allows our extension to communicate with the GPT model, obtain it's responses, and integrate them into the VS Code IDE to provide the code reviews.\n")),(0,s.kt)("h2",{id:"settings"},"Settings"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Interface used to provide a set of configuration options for the code review bot extension.\nDefines the settings object which can be used to customize the extension for each user.\n")),(0,s.kt)("h2",{id:"authinfo"},"AuthInfo"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Interface used for providing authentication infor to the extension so it can interact with the ChatGPT API.\n")))}l.isMDXComponent=!0}}]);