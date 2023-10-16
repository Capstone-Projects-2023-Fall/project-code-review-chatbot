"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const a={title:"Class Documentation",description:"Class Documentation",hide_table_of_contents:!0,sidebar_position:1},r="Classes",s={unversionedId:"api-specification/class-documentation",id:"api-specification/class-documentation",title:"Class Documentation",description:"Class Documentation",source:"@site/docs/api-specification/class-documentation.md",sourceDirName:"api-specification",slug:"/api-specification/class-documentation",permalink:"/project-code-review-chatbot/docs/api-specification/class-documentation",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/edit/main/documentation/docs/api-specification/class-documentation.md",tags:[],version:"current",lastUpdatedBy:"Tesla",sidebarPosition:1,frontMatter:{title:"Class Documentation",description:"Class Documentation",hide_table_of_contents:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-code-review-chatbot/docs/category/api-specification"},next:{title:"Design API Intro",permalink:"/project-code-review-chatbot/docs/api-specification/design-api-intro"}},c={},l=[{value:"Classes/Functions For The Extension",id:"classesfunctions-for-the-extension",level:2},{value:"1. export function: <code>activate()</code>",id:"1-export-function-activate",level:3},{value:"2. public function : <code>setAuthenticationInfo()</code>",id:"2-public-function--setauthenticationinfo",level:3},{value:"3. public function : <code>setSettings()</code>",id:"3-public-function--setsettings",level:3},{value:"4. public function : <code>getSettings()</code>",id:"4-public-function--getsettings",level:3},{value:"5. private function : <code>_newAPI()</code>",id:"5-private-function--_newapi",level:3},{value:"6. public function : <code>resolveWebviewView()</code>",id:"6-public-function--resolvewebviewview",level:3},{value:"7. public async function : <code>resetConversation()</code>",id:"7-public-async-function--resetconversation",level:3},{value:"8. public async function : <code>search()</code>",id:"8-public-async-function--search",level:3},{value:"9. private function : <code>_getHtmlForWebview()</code>",id:"9-private-function--_gethtmlforwebview",level:3},{value:"10. export function : <code>deactivate()</code>",id:"10-export-function--deactivate",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"classes"},"Classes"),(0,o.kt)("h2",{id:"classesfunctions-for-the-extension"},"Classes/Functions For The Extension"),(0,o.kt)("h3",{id:"1-export-function-activate"},"1. export function: ",(0,o.kt)("inlineCode",{parentName:"h3"},"activate()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": This function is called when the extension is first activated. It initializes the extension and sets up the ChatGPTViewProvider."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")," : context \u2013 The extension's context."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data Fields"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"apikey = OpenAI Token")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"model = ChatGPT Model being used"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Methods:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"provider.SetAuthenticationInfo()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Puts configuration settings into the provider")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"context.subscriptions.push()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register the provider with the extension's context"),(0,o.kt)("li",{parentName:"ul"},"Register the commands that can be called from the extension's package.json")),(0,o.kt)("h3",{id:"2-public-function--setauthenticationinfo"},"2. public function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"setAuthenticationInfo()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description")," : Sets the API key and creates a new API instance based on this key."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")," : {AuthInfo} authInfo - Authentication information containing the API key."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," : any"),(0,o.kt)("h3",{id:"3-public-function--setsettings"},"3. public function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"setSettings()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": Sets the ChatGPT settings"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")," : {Settings} settings - ChatGPT settings to be applied"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," : any"),(0,o.kt)("h3",{id:"4-public-function--getsettings"},"4. public function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"getSettings()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": Retrieves the current ChatGPT settings."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," : {Settings} The current ChatGPT settings."),(0,o.kt)("h3",{id:"5-private-function--_newapi"},"5. private function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"_newAPI()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": Private method initializes a new ChatGPTAPI instance"),(0,o.kt)("h3",{id:"6-public-function--resolvewebviewview"},"6. public function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"resolveWebviewView()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": Sets the ChatGPT settings"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")," : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"{vscode.WebviewView} webviewView - The WebviewView to be resolved."),(0,o.kt)("li",{parentName:"ul"},"{vscode.WebviewViewResolveContext} context - The resolve context for the WebviewView."),(0,o.kt)("li",{parentName:"ul"},"{vscode.CancellationToken} _token - A cancellation token for the operation.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," : any"),(0,o.kt)("h3",{id:"7-public-async-function--resetconversation"},"7. public async function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"resetConversation()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": Resets the conversation state and clears the conversaton history"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," : {Promise} A Promise that resolves when the conversation is successfully reset."),(0,o.kt)("h3",{id:"8-public-async-function--search"},"8. public async function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"search()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": Performs a ChatGPT search based on the provided prompt or user input."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")," : {string | undefined} prompt - The user's input prompt."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," : {Promise} A Promise that resolves when the conversation is successfully reset."),(0,o.kt)("h3",{id:"9-private-function--_gethtmlforwebview"},"9. private function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"_getHtmlForWebview()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": Generates the HTML content for the ChatGPT webview."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")," : {vscode.Webview} webview The Webview instance for generating HTML"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," : {string} The HTML content as a string."),(0,o.kt)("h3",{id:"10-export-function--deactivate"},"10. export function : ",(0,o.kt)("inlineCode",{parentName:"h3"},"deactivate()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": This function is called when the extension is first deactivated.\nIt deactivates the extension"))}u.isMDXComponent=!0}}]);