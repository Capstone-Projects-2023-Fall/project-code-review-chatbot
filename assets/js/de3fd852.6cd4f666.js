"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(r,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={title:"Front End Class Documentation",description:"Front End Class Documentation",hide_table_of_contents:!0,sidebar_position:2},l="Frontend Class Documentation",s={unversionedId:"api-specification/frontend-class-docs",id:"api-specification/frontend-class-docs",title:"Front End Class Documentation",description:"Front End Class Documentation",source:"@site/docs/api-specification/frontend-class-docs.md",sourceDirName:"api-specification",slug:"/api-specification/frontend-class-docs",permalink:"/project-code-review-chatbot/docs/api-specification/frontend-class-docs",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/edit/main/documentation/docs/api-specification/frontend-class-docs.md",tags:[],version:"current",lastUpdatedBy:"Yoonjae Jason Lee",sidebarPosition:2,frontMatter:{title:"Front End Class Documentation",description:"Front End Class Documentation",hide_table_of_contents:!0,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Class Documentation",permalink:"/project-code-review-chatbot/docs/api-specification/class-documentation"},next:{title:"CRC API Introduction",permalink:"/project-code-review-chatbot/docs/api-specification/design-api-intro"}},r={},d=[{value:"ExtensionContainer",id:"extensioncontainer",level:2},{value:"Data fields",id:"data-fields",level:3},{value:"Methods",id:"methods",level:3},{value:"SuggestionList",id:"suggestionlist",level:2},{value:"Data fields",id:"data-fields-1",level:3},{value:"Methods",id:"methods-1",level:3},{value:"ListItem",id:"listitem",level:2},{value:"Data fields",id:"data-fields-2",level:3},{value:"Methods",id:"methods-2",level:3},{value:"DropDownContainer",id:"dropdowncontainer",level:2},{value:"Data fields",id:"data-fields-3",level:3},{value:"Methods",id:"methods-3",level:3},{value:"InputBar",id:"inputbar",level:2},{value:"Data fields",id:"data-fields-4",level:3},{value:"Methods",id:"methods-4",level:3},{value:"IconButton",id:"iconbutton",level:2},{value:"Data fields",id:"data-fields-5",level:3},{value:"Methods",id:"methods-5",level:3},{value:"ExplainButton",id:"explainbutton",level:2},{value:"Data fields",id:"data-fields-6",level:3},{value:"Methods",id:"methods-6",level:3},{value:"LocateButton",id:"locatebutton",level:2},{value:"Data fields",id:"data-fields-7",level:3},{value:"Methods",id:"methods-7",level:3},{value:"CheckButton",id:"checkbutton",level:2},{value:"Data fields",id:"data-fields-8",level:3},{value:"Methods",id:"methods-8",level:3},{value:"ResponseContainer",id:"responsecontainer",level:2},{value:"Data fields",id:"data-fields-9",level:3},{value:"Methods",id:"methods-9",level:3},{value:"Response",id:"response",level:2},{value:"Data fields",id:"data-fields-10",level:3},{value:"Methods",id:"methods-10",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frontend-class-documentation"},"Frontend Class Documentation"),(0,i.kt)("h2",{id:"extensioncontainer"},"ExtensionContainer"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The ExtensionContainer component encapsulates the entire extension interface."),(0,i.kt)("h3",{id:"data-fields"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"object-suggestionlist"},"object SuggestionList"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Displays component with ChatGPT suggestions for the specific file and commit")))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"setcodepromptstring-prompt"},"setCodePrompt(string Prompt)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Reset the code prompt used to initialize the SuggestionList"))))),(0,i.kt)("h2",{id:"suggestionlist"},"SuggestionList"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The SuggestionList component is responsible for displaying an array of ListItems corresponding to suggestions from ChatGPT."),(0,i.kt)("h3",{id:"data-fields-1"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"array-listitem"},"array ListItem"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"List of code improvement suggestions for the specific file and commit")))),(0,i.kt)("h3",{id:"methods-1"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No methods"))),(0,i.kt)("h2",{id:"listitem"},"ListItem"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The ListItem component shows a ChatGPT suggestion. It consists of the title of the suggestion and a dropdown icon to display the DropDownContainer component for the corresponding suggestion."),(0,i.kt)("h3",{id:"data-fields-2"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"string-title"},"string Title"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The highlighted title of the suggestion from GPT"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"object-dropdowncontainer"},"object DropDownContainer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dropdown description of the suggestion")))),(0,i.kt)("h3",{id:"methods-2"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No methods"))),(0,i.kt)("h2",{id:"dropdowncontainer"},"DropDownContainer"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The DropDownContainer component contains information about a suggestion and is hidden until the dropdown button in the ListItem component is triggered."),(0,i.kt)("h3",{id:"data-fields-3"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"string-description"},"string Description"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The unhighlighted details of hte suggestion from GPT"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"boolean-isopen"},"boolean isOpen"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Determines if the dropdown container is displayed or not; False is default")))),(0,i.kt)("h3",{id:"methods-3"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"closecontainer"},"closeContainer()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the display status of the container to be not displayed"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"opencontainer-"},"openContainer ()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the display status of the container to be displayed"))))),(0,i.kt)("h2",{id:"inputbar"},"InputBar"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The InputBar component is a box in which a user can input a prompt to ask ChatGPT directly."),(0,i.kt)("h3",{id:"data-fields-4"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No data fields")),(0,i.kt)("h3",{id:"methods-4"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"getinput"},"getInput()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"returns the user input"))))),(0,i.kt)("h2",{id:"iconbutton"},"IconButton"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The IconButton component creates and formats a clickable icon that acts as a button. This button will perform a certain action."),(0,i.kt)("h3",{id:"data-fields-5"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"object-icon"},"object Icon"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The icon to be displayed as a button"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"integer-size"},"integer Size"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The width and height of the button")))),(0,i.kt)("h3",{id:"methods-5"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No methods"))),(0,i.kt)("h2",{id:"explainbutton"},"ExplainButton"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The ExplainButton component belongs to a ListItem component and prompts ChatGPT to explain how to implement the corresponding suggestion and why it is important to implement it."),(0,i.kt)("h3",{id:"data-fields-6"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"no-data-fields"},"No data fields"))),(0,i.kt)("h3",{id:"methods-6"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"setpromptstring-prompt"},"setPrompt(string Prompt)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set the prompt that the explain button should trigger"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"sendprompt"},"sendPrompt()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send the prompt to GPT API"))))),(0,i.kt)("h2",{id:"locatebutton"},"LocateButton"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The LocateButton component belongs to a ListItem component and prompts ChatGPT to provide the code sections within the analyzed file that are related to the suggestion."),(0,i.kt)("h3",{id:"data-fields-7"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"no-data-fields-1"},"No data fields"))),(0,i.kt)("h3",{id:"methods-7"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"setpromptstring-prompt-1"},"setPrompt(string Prompt)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set the prompt that the locate button should trigger"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"sendprompt-1"},"sendPrompt()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send the prompt to GPT API"))))),(0,i.kt)("h2",{id:"checkbutton"},"CheckButton"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The CheckButton component belongs to a ListItem component and displays a checkmark if clicked, denoting that the corresponding suggestion has been implemented"),(0,i.kt)("h3",{id:"data-fields-8"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No data fields")),(0,i.kt)("h3",{id:"methods-8"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"setcheckboolean-ischeck"},"setCheck(boolean isCheck)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set the button to checked or unchecked"))))),(0,i.kt)("h2",{id:"responsecontainer"},"ResponseContainer"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The ResponseContainer component displays a list of Response components and appends the most recent one to the end of the container."),(0,i.kt)("h3",{id:"data-fields-9"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"array-responselist"},"array ResponseList"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"list of Response objects for the corresponding message thread")))),(0,i.kt)("h3",{id:"methods-9"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"appendresponseobject-response"},"appendResponse(object Response)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Appends the most recent GPT response to the list"))))),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("details",{open:"True"},(0,i.kt)("summary",null,"The Response component contains ChatGPT's response to an InputBar prompt or a LocateButton/ExplainButton trigger."),(0,i.kt)("h3",{id:"data-fields-10"},"Data fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"string-response"},"string Response"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The text response received from ChatGPT")))),(0,i.kt)("h3",{id:"methods-10"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No methods"))))}u.isMDXComponent=!0}}]);