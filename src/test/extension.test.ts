//---------Jest functions for mocking---------
//might need to add classes and function for futher testing
import { jest } from '@jest/globals';

jest.mock('vscode', () => {
    return {
      Uri: {
        parse: jest.fn().mockReturnValue({}),
        joinPath: jest.fn(),
      },
      WebviewView: jest.fn(),
      Webview: jest.fn(),
      SnippetString: jest.fn(),
      window: {
        activeTextEditor: {
          insertSnippet: jest.fn(),
        },
      },
      commands: {
        executeCommand: jest.fn(),
      },
    };
  }, { virtual: true });
  
  jest.mock('chatgpt', () => {
    return jest.fn().mockImplementation(() => {
      return {
        sendMessage: jest.fn(),
      };
    });
  });

  jest.mock('../extension', () => {
    return {
      ChatGPTViewProvider: jest.fn().mockImplementation(() => {
        return {
          _extensionUri: {}, // you may replace with a suitable object or value
          _view: undefined,
          _chatGPTAPI: undefined,
          _conversation: undefined,
          _response: undefined,
          _prompt: undefined,
          _fullPrompt: undefined,
          _currentMessageNumber: 0,
          _settings: {}, // populate with default settings if necessary
  
          setAuthenticationInfo: jest.fn(),
          setSettings: jest.fn(),
          getSettings: jest.fn(),
          _newAPI: jest.fn(),
          resolveWebviewView: jest.fn(),
          resetConversation: jest.fn(),
          search: jest.fn(),
          _getHtmlForWebview: jest.fn(() => 'mocked_HTML_content'), // return mocked HTML content as string
        };
      }),
    };
  });
  
  
  //---------------------start of unit testing code--------------------

import * as vscode from 'vscode';
import { ChatGPTAPI } from 'chatgpt'; 
import { ChatGPTViewProvider  } from '../extension';
import { resolve } from 'path';

describe('ChatGPTViewProvider', () => {
     
    let chatGPTViewProvider: ChatGPTViewProvider;
  
    beforeEach(() => {
      chatGPTViewProvider = new ChatGPTViewProvider(vscode.Uri.parse('../extension'));
    });
  
    it('Setting Authentication Info', () => {
      const authInfo = { apiKey: 'test' };
  
      chatGPTViewProvider.setAuthenticationInfo(authInfo);

      expect(chatGPTViewProvider.setAuthenticationInfo).toHaveBeenCalledWith(authInfo);
      expect(chatGPTViewProvider.setAuthenticationInfo).toHaveBeenCalledTimes(1);
    });

    it('Resetting Conversation', () => {
      chatGPTViewProvider.resetConversation();

      expect(chatGPTViewProvider.resetConversation).toBeCalled();
      expect(chatGPTViewProvider.resetConversation).toHaveBeenCalledTimes(1);
    });

    it('gets settings', () => {
      chatGPTViewProvider.getSettings();
  
      expect(chatGPTViewProvider.getSettings).toHaveBeenCalledTimes(1);
    });

    it('Search Functionality', () => {
      chatGPTViewProvider.search();
      expect(chatGPTViewProvider.search).toBeCalled();
      expect(chatGPTViewProvider.search).toHaveBeenCalledTimes(1);
    });

    it('set settings', () => {
      const setttings = {
        apiURL: 'https://example.com/api',
        model: 'newModel',
      };
      chatGPTViewProvider.setSettings(setttings);

      expect(chatGPTViewProvider.setSettings).toBeCalledWith(setttings)
      expect(chatGPTViewProvider.setSettings).toBeCalledTimes(1);

    });

    /*
    Start of Integration Tests based off of Use Cases
    Comments specify what use case the following test is for.
    For more information use cases can be found at the following link:
    https://capstone-projects-2023-fall.github.io/project-code-review-chatbot/docs/requirements/use-case-descriptions
    */
  

    //Use Case 1
    it('Refactors', () => {
      const authInfo = {apiKey: 'testKey' };
      chatGPTViewProvider.setAuthenticationInfo(authInfo);
      expect(chatGPTViewProvider.setAuthenticationInfo).toBeCalled();
      
      const selectedText = "this is an example of text";
      expect(selectedText).toBe('this is an example of text');
      
      chatGPTViewProvider.search('ChatGPTAPI.refactor', false);
      expect(chatGPTViewProvider.search).toBeCalled();
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.refactor', false);

      chatGPTViewProvider.resetConversation();
      expect(chatGPTViewProvider.resetConversation).toBeCalled();
    });

    //Use Case 2
    it('Refactors + Documents', () => {
      const authInfo = {apiKey: 'testKey' };
      chatGPTViewProvider.setAuthenticationInfo(authInfo);
      expect(chatGPTViewProvider.setAuthenticationInfo).toBeCalled();
      
      const selectedText = "this is an example of text";
      expect(selectedText).toBe('this is an example of text');
      
      chatGPTViewProvider.search('ChatGPTAPI.refactor', false);
      expect(chatGPTViewProvider.search).toBeCalled();
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.refactor', false);

      chatGPTViewProvider.search('ChatGPTAPI.documentation', true);
      expect(chatGPTViewProvider.search).toBeCalled();
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.documentation', true);

      chatGPTViewProvider.resetConversation();
      expect(chatGPTViewProvider.resetConversation).toBeCalled();
    });  

    //Use Case 3
    it('Multiple Optimizations, Explanations, and Refactors', () => {
      const authInfo = {apiKey: 'testKey' };
      chatGPTViewProvider.setAuthenticationInfo(authInfo);
      expect(chatGPTViewProvider.setAuthenticationInfo).toBeCalled();
      
      chatGPTViewProvider.search('ChatGPTAPI.optimize', true);
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.optimize', true);

      chatGPTViewProvider.search('ChatGPTAPI.explain', false);
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.explain', false);

      const selectedText = "updated test text to be refactored";
      expect(selectedText).toBe('updated test text to be refactored');

      chatGPTViewProvider.search('ChatGPTAPI.refactor', false);      
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.refactor', false);

      //repeat process as explained in use case. For argument's sake it was done three times
      chatGPTViewProvider.search('ChatGPTAPI.optimize', true);
      chatGPTViewProvider.search('ChatGPTAPI.refctor', true);
      chatGPTViewProvider.search('ChatGPTAPI.explain', true);

      chatGPTViewProvider.search('ChatGPTAPI.optimize', true);
      chatGPTViewProvider.search('ChatGPTAPI.refctor', true);
      chatGPTViewProvider.search('ChatGPTAPI.explain', true);

      expect(chatGPTViewProvider.search).toHaveBeenCalledTimes(9);//9 times as there are 3 steps in each repeition

      chatGPTViewProvider.resetConversation();
      expect(chatGPTViewProvider.resetConversation).toBeCalled();
    });

    //Use Case 4
    it('Prompt + Finds problems and Explains', () => {
      //No prompt feature has been made yet so this part will be skipped for now
      const authInfo = {apiKey: 'testKey' };
      chatGPTViewProvider.setAuthenticationInfo(authInfo);
      expect(chatGPTViewProvider.setAuthenticationInfo).toBeCalled();

      chatGPTViewProvider.search('ChatGPTAPI.findProblems', true);
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.findProblems', true);

      chatGPTViewProvider.search('ChatGPTAPI.explain', false);
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.explain', false);

      chatGPTViewProvider.resetConversation();
      expect(chatGPTViewProvider.resetConversation).toBeCalled();
    });

    //Use Case 5
    it('Finds', () => {
      const authInfo = {apiKey: 'testKey' };
      chatGPTViewProvider.setAuthenticationInfo(authInfo);
      expect(chatGPTViewProvider.setAuthenticationInfo).toBeCalled();

      chatGPTViewProvider.search('ChatGPTAPI.findProblems', true);
      chatGPTViewProvider.search('ChatGPTAPI.findProblems', true);
      expect(chatGPTViewProvider.search).toHaveBeenCalledTimes(2);

      chatGPTViewProvider.resetConversation();
      expect(chatGPTViewProvider.resetConversation).toBeCalled();
    });
    
    //Use Case 6
    it('Catch commit and Optimize', () => {
      const authInfo = {apiKey: 'testKey' };
      chatGPTViewProvider.setAuthenticationInfo(authInfo);
      expect(chatGPTViewProvider.setAuthenticationInfo).toBeCalled();

      chatGPTViewProvider.search('ChatGPTAPI.optimize', true);
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.optimize', true);

      chatGPTViewProvider.resetConversation();
      expect(chatGPTViewProvider.resetConversation).toBeCalled();
    });

    //Use Case 7
    it('Explain loop', () => {
      const authInfo = {apiKey: 'testKey' };
      chatGPTViewProvider.setAuthenticationInfo(authInfo);
      expect(chatGPTViewProvider.setAuthenticationInfo).toBeCalled();

      chatGPTViewProvider.search('ChatGPTAPI.refactor', true);
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.refactor', true);
      chatGPTViewProvider.search('ChatGPTAPI.optimize', true);
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.optimize', true);


      chatGPTViewProvider.search('ChatGPTAPI.explain', false);
      chatGPTViewProvider.search('ChatGPTAPI.explain', false);
      chatGPTViewProvider.search('ChatGPTAPI.explain', false);
      expect(chatGPTViewProvider.search).toBeCalledWith('ChatGPTAPI.explain', false);
      expect(chatGPTViewProvider.search).toHaveBeenCalledTimes(5);


      chatGPTViewProvider.resetConversation();
      expect(chatGPTViewProvider.resetConversation).toBeCalled();
    });

/* End of Integration Tests */

  });

 


  