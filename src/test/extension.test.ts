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

      
    

  });

 


  