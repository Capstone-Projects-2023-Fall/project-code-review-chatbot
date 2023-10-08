(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3860],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2465:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var r=t(7462),o=t(7294),s=t(3905),a=t(2547),i=t(8084);const p=function(e){const n=(0,i.OD)("docusaurus-plugin-redoc");return e?n?.[e]:Object.values(n??{})?.[0]},c=e=>{let{id:n}=e;const t=p(n),s=(0,o.useMemo)((()=>({theme:{breakpoints:{medium:"130rem",large:"130rem"}}})),[]);return o.createElement(a.Z,(0,r.Z)({},t,{optionsOverrides:s}))},l={title:"API 1 - Code ReviewChatBot",description:"API Specification from openapi.yml",hide_table_of_contents:!0,sidebar_position:3},m=void 0,u={unversionedId:"api-specification/openapi-spec",id:"api-specification/openapi-spec",title:"API 1 - Code ReviewChatBot",description:"API Specification from openapi.yml",source:"@site/docs/api-specification/openapi-spec.md",sourceDirName:"api-specification",slug:"/api-specification/openapi-spec",permalink:"/project-code-review-chatbot/docs/api-specification/openapi-spec",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/edit/main/documentation/docs/api-specification/openapi-spec.md",tags:[],version:"current",lastUpdatedBy:"Jason Lee",sidebarPosition:3,frontMatter:{title:"API 1 - Code ReviewChatBot",description:"API Specification from openapi.yml",hide_table_of_contents:!0,sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Design API Intro",permalink:"/project-code-review-chatbot/docs/api-specification/design-api-intro"},next:{title:"Test Procedures",permalink:"/project-code-review-chatbot/docs/category/test-procedures"}},d={};(0,s.kt)(c,{id:"using-single-yaml"});const g=[],h={toc:g};function f(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/KROOSVI_1/CodeReviewChatBot/1"},"https://app.swaggerhub.com/apis/KROOSVI_1/CodeReviewChatBot/1")),(0,s.kt)("p",null,"openapi: 3.0.0\nservers:\nurl: ",(0,s.kt)("a",{parentName:"p",href:"https://virtserver.swaggerhub.com/KROOSVI_1/123/1.0.0"},"https://virtserver.swaggerhub.com/KROOSVI_1/123/1.0.0"),"\ninfo:\nversion: '1'\ntitle: Code Review Chatbot\ndescription: The API for the Code Review Chatbot\npaths:\n/authentication:\nget:\ntags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    - authentication\n  operationId: API key\n  responses:\n    '200':\n      description: authenticated successfully\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/GoodResult'\n          \n    '400':\n      description: authentication failed\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/BadResult'\n            \n")),(0,s.kt)("p",null,"  '/authentication/{userID}/{APIKey}':\npost:\ntags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    - authentication\n  operationId: authentication\n  parameters:\n    - name: userID\n      in: path\n      required: true\n      schema:\n        type: string\n    - name: APIKey\n      in: path\n      required: true\n      schema:\n        type: string\n  responses:\n    '200':\n      description: response\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/authentication'\n            \n    '400':\n      description: authentication failed\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/BadResult'\n  x-swagger-router-controller: authentication\n          \n")),(0,s.kt)("p",null,"  '/search/{userID}/{entry}':\npost:\ntags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    - search \n  operationId: ChatGPT Search\n  parameters:\n    - name: userID\n      in: path\n      required: true\n      schema:\n        type: string\n    - name: entry\n      in: path\n      required: true\n      schema:\n        type: string\n\n  responses:\n    '200':\n      description: Good search\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/Response'\n    \n    '400':\n      description: Bad search, wrong entry\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/BadResponse'\n            \n  x-swagger-router-controller: search\n")),(0,s.kt)("p",null,"  '/search/{userID}':\nget:\ntags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    - search \n  operationId: Search\n  parameters:\n    - name: userID\n      in: path\n      required: true\n      schema:\n        type: string\n\n  responses:\n    '200':\n      description: response\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/History'\n  x-swagger-router-controller: search\n  \n")),(0,s.kt)("p",null,"  '/setting/ChatGPT/{userID}/{entry}':\npost:\ntags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    - setting\n  description: sets a specific setting in chatGPT\n  operationId: setting\n  parameters:\n    - name: userID\n      in: path\n      required: true\n      schema:\n        type: string\n    - name: entry\n      in: path\n      required: true\n      schema:\n        type: string\n        format: string\n   \n  responses:\n    '200':\n      description: response\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/Setting'\n  x-swagger-router-controller: setting\n  \n")),(0,s.kt)("p",null,"  '/setting/ChatGPT/{userID}':\nget:\ntags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      - setting\n    description: sets a specific setting in chatGPT\n    operation: get setting\n    parameters:\n      - name: userID\n        in: path\n        required: true\n        schema:\n          type: string\n\n    responses:\n      '200':\n        description: response\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/CurrentSetting'\n    x-swagger-router-controller: setting\n    \n")),(0,s.kt)("p",null,"  '/resetConversation/{userID}':\ndelete:\ntags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    - reset\n  description: Resets the conversation state and clears the conversation history\n  operationId: reset\n  parameters:\n   - name: userID\n     in: path\n     required: true\n     schema:\n        type: string\n  responses:\n    '200':\n      description: response\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/Reset'\n  x-swagger-router-controller: Reset\n  \n")),(0,s.kt)("p",null,"  '/deactivated/{userID}':\npost:\ntags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    - deactivated\n  operationId: deactivated\n  \n  parameters:\n   - name: userID\n     in: path\n     required: true\n     schema:\n        type: string\n        \n  responses:\n    '200':\n      description: ok\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/Reset'\n  x-swagger-router-controller: deactivated\n")),(0,s.kt)("p",null,'components:\nschemas:\nResponse:\ntype: object\nproperties:\ncode:\ntype: integer\nformat: int32\nexample: 0\nmessage:\ntype: string\nexample: ChatGPT\'s responds on the code "..."'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"BadResponse:\n  type: object\n  properties:\n    code:\n      type: integer\n      format: int32\n      example: 0\n    message:\n      type: string\n      example: Wrong entry or illgal entry\n      \nauthentication:\n  type: object\n  properties:\n    code:\n      type: integer\n      format: int32\n      example: 0\n    message:\n      type: string\n      example: Authentication passed!\nReset:\n  type: object\n  properties:\n    code:\n      type: integer\n      format: int32\n      example: 0\n    message:\n      type: string\n      example: Done!\nSetting:\n  type: object\n  properties:\n    code:\n      type: integer\n      format: int32\n    message:\n      type: string\n      example: changed made!\nCurrentSetting:\n  type: object\n  properties:\n    code:\n      type: integer\n      format: int32\n    setting1:\n      type: string\n      example: on\n    setting2:\n      type: string\n      example: off\n    setting3:\n      type: string\n      example: off\n      \nHistory:\n  type: object\n  properties:\n    Data:\n      type: string\n      format: int32\n      example: 07/29/2023\n    message:\n      type: string\n      example: \n        \"Searched -> x returned -> y\"\nGoodResult:\n  type: object\n  properties:\n    code:\n      type: string\n      format: int32\n      example: '0'\n      \nBadResult:\n  type: object\n  properties:\n    code:\n      type: string\n      format: int32\n      example: '1'\n    message:\n      type: string\n      example: \n        \"This user is not authenticated or you did not sign in\"\n")))}f.isMDXComponent=!0},6242:()=>{},1314:()=>{},7251:()=>{},9018:()=>{},3044:()=>{},3408:()=>{},5126:()=>{}}]);