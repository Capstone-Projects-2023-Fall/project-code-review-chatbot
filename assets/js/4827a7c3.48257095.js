"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1261],{8206:e=>{e.exports=JSON.parse('{"url":"redocusaurus/using-single-yaml.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"title":"Code Review Chatbot","description":"The API for the Code Review Chatbot","version":"1"},"servers":[{"url":"https://virtserver.swaggerhub.com/KROOSVI_1/123/1.0.0","description":"SwaggerHub API Auto Mocking"}],"paths":{"/authentication":{"get":{"tags":["authentication"],"operationId":"API key","responses":{"200":{"description":"authenticated successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GoodResult"}}}},"400":{"description":"authentication failed","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BadResult"}}}}}}},"/authentication/{userID}/{APIKey}":{"post":{"tags":["authentication"],"operationId":"authentication","parameters":[{"name":"userID","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}},{"name":"APIKey","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/authentication"}}}},"400":{"description":"authentication failed","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BadResult"}}}}},"x-swagger-router-controller":"authentication"}},"/search/{userID}/{entry}":{"post":{"tags":["search"],"operationId":"ChatGPT Search","parameters":[{"name":"userID","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}},{"name":"entry","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"Good search","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Response"}}}},"400":{"description":"Bad search, wrong entry","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BadResponse"}}}}},"x-swagger-router-controller":"search"}},"/search/{userID}":{"get":{"tags":["search"],"operationId":"Search","parameters":[{"name":"userID","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/History"}}}}},"x-swagger-router-controller":"search"}},"/setting/ChatGPT/{userID}/{entry}":{"post":{"tags":["setting"],"description":"sets a specific setting in chatGPT","operationId":"setting","parameters":[{"name":"userID","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}},{"name":"entry","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string","format":"string"}}],"responses":{"200":{"description":"response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Setting"}}}}},"x-swagger-router-controller":"setting"}},"/setting/ChatGPT/{userID}":{"get":{"tags":["setting"],"description":"sets a specific setting in chatGPT","operationId":"getsetting","parameters":[{"name":"userID","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CurrentSetting"}}}}},"x-swagger-router-controller":"setting"}},"/resetConversation/{userID}":{"delete":{"tags":["reset"],"description":"Resets the conversation state and clears the conversaton history","operationId":"reset","parameters":[{"name":"userID","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Reset"}}}}},"x-swagger-router-controller":"Reset"}},"/deactivated/{userID}":{"post":{"tags":["deactivated"],"operationId":"deactivated","parameters":[{"name":"userID","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"ok","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Reset"}}}}},"x-swagger-router-controller":"deactivated"}}},"components":{"schemas":{"Response":{"type":"object","properties":{"code":{"type":"integer","format":"int32","example":0},"message":{"type":"string","example":"ChatGPT\'s responds on the code \\"...\\""}}},"BadResponse":{"type":"object","properties":{"code":{"type":"integer","format":"int32","example":0},"message":{"type":"string","example":"Wrong entry or illgal entry"}}},"authentication":{"type":"object","properties":{"code":{"type":"integer","format":"int32","example":0},"message":{"type":"string","example":"Authentication passed!"}}},"Reset":{"type":"object","properties":{"code":{"type":"integer","format":"int32","example":0},"message":{"type":"string","example":"Done!"}}},"Setting":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string","example":"changed made!"}}},"CurrentSetting":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"setting1":{"type":"string","example":"true"},"setting2":{"type":"string","example":"false"},"setting3":{"type":"string","example":"false"}}},"History":{"type":"object","properties":{"Data":{"type":"string","format":"int32","example":"07/29/2023"},"message":{"type":"string","example":"Searched -> x returned -> y"}}},"GoodResult":{"type":"object","properties":{"code":{"type":"string","format":"int32","example":"0"}}},"BadResult":{"type":"object","properties":{"code":{"type":"string","format":"int32","example":"1"},"message":{"type":"string","example":"This user is not authenticated or you did not sign in"}}}}}}}')}}]);