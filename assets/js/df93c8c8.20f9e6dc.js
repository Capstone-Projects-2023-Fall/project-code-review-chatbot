"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return r?i.createElement(k,o(o({ref:t},d),{},{components:r})):i.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:4},o="Backend Class Diagram",l={unversionedId:"system-architecture/BackendDiagram",id:"system-architecture/BackendDiagram",title:"Backend Class Diagram",description:"backend-class-diagram.png",source:"@site/docs/system-architecture/BackendDiagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/BackendDiagram",permalink:"/project-code-review-chatbot/docs/system-architecture/BackendDiagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/edit/main/documentation/docs/system-architecture/BackendDiagram.md",tags:[],version:"current",lastUpdatedBy:"Yoonjae Jason Lee",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"CRC Extension Class Diagram",permalink:"/project-code-review-chatbot/docs/system-architecture/ClassDiagram"},next:{title:"Database Diagram",permalink:"/project-code-review-chatbot/docs/system-architecture/database-diagram"}},s={},p=[{value:"Classes and Descriptions",id:"classes-and-descriptions",level:2},{value:"<code>User</code>",id:"user",level:3},{value:"<code>UserController</code>",id:"usercontroller",level:3},{value:"<code>DBLogging</code>",id:"dblogging",level:3},{value:"<code>AdminController</code>",id:"admincontroller",level:3},{value:"<code>CreateNewUser</code>",id:"createnewuser",level:3},{value:"<code>ResetUserPassword</code>",id:"resetuserpassword",level:3},{value:"<code>UpdateUserProfileInformation</code>",id:"updateuserprofileinformation",level:3},{value:"<code>DeleteUser</code>",id:"deleteuser",level:3},{value:"<code>FortifyServiceProvider</code>",id:"fortifyserviceprovider",level:3},{value:"<code>JetstreamServiceProvider</code>",id:"jetstreamserviceprovider",level:3},{value:"<code>VaporUiServiceProvider</code>",id:"vaporuiserviceprovider",level:3},{value:"Relationships",id:"relationships",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backend-class-diagram"},"Backend Class Diagram"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://postimg.cc/xJMzXkbG"},(0,n.kt)("img",{parentName:"a",src:"https://i.postimg.cc/gJBqB8z7/backend-class-diagram.png",alt:"backend-class-diagram.png"}))),(0,n.kt)("h2",{id:"classes-and-descriptions"},"Classes and Descriptions"),(0,n.kt)("h3",{id:"user"},(0,n.kt)("inlineCode",{parentName:"h3"},"User")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Attributes"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"fillable"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"hidden"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"casts"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"appends"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"accessToken")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"login()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"register()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"details()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"successStatus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Represents a user entity in the system with functionalities related to user operations.")),(0,n.kt)("h3",{id:"usercontroller"},(0,n.kt)("inlineCode",{parentName:"h3"},"UserController")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"login()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"register()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"details()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Manages user operations, routing requests to appropriate services or methods.")),(0,n.kt)("h3",{id:"dblogging"},(0,n.kt)("inlineCode",{parentName:"h3"},"DBLogging")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"logData()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Handles the logging of database operations, storing log entries related to database activities.")),(0,n.kt)("h3",{id:"admincontroller"},(0,n.kt)("inlineCode",{parentName:"h3"},"AdminController")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"dashboard()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"index()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"liveSessions()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"logs()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"destroy()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Provides administrative control over the backend system, including a dashboard and log viewing capabilities.")),(0,n.kt)("h3",{id:"createnewuser"},(0,n.kt)("inlineCode",{parentName:"h3"},"CreateNewUser")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"create()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Specialized in handling the creation of new user entities.")),(0,n.kt)("h3",{id:"resetuserpassword"},(0,n.kt)("inlineCode",{parentName:"h3"},"ResetUserPassword")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"reset()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Dedicated to resetting user passwords.")),(0,n.kt)("h3",{id:"updateuserprofileinformation"},(0,n.kt)("inlineCode",{parentName:"h3"},"UpdateUserProfileInformation")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"update()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"updateVerifiedUser()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Manages updating user profile information.")),(0,n.kt)("h3",{id:"deleteuser"},(0,n.kt)("inlineCode",{parentName:"h3"},"DeleteUser")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"delete()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Handles the deletion of user entities.")),(0,n.kt)("h3",{id:"fortifyserviceprovider"},(0,n.kt)("inlineCode",{parentName:"h3"},"FortifyServiceProvider")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"register()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"boot()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Registers and boots foundational services for user operations.")),(0,n.kt)("h3",{id:"jetstreamserviceprovider"},(0,n.kt)("inlineCode",{parentName:"h3"},"JetstreamServiceProvider")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"register()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"boot()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"configurePermissions()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": A service provider that sets up services and configurations, likely part of a specific framework.")),(0,n.kt)("h3",{id:"vaporuiserviceprovider"},(0,n.kt)("inlineCode",{parentName:"h3"},"VaporUiServiceProvider")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"boot()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"gate()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"register()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Provides UI-related services and registers them for the system's use.")),(0,n.kt)("h2",{id:"relationships"},"Relationships"),(0,n.kt)("p",null,"The diagram shows several relationships between classes, indicating how they interact with each other. For instance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"UserController")," \u2194 ",(0,n.kt)("inlineCode",{parentName:"li"},"User"),": Indicates ",(0,n.kt)("inlineCode",{parentName:"li"},"UserController")," uses the ",(0,n.kt)("inlineCode",{parentName:"li"},"User")," class to manage user data."),(0,n.kt)("li",{parentName:"ul"},"Service providers (",(0,n.kt)("inlineCode",{parentName:"li"},"FortifyServiceProvider"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"JetstreamServiceProvider"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"VaporUiServiceProvider"),") \u2194 User operation classes (",(0,n.kt)("inlineCode",{parentName:"li"},"CreateNewUser"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ResetUserPassword"),", etc.)")))}c.isMDXComponent=!0}}]);