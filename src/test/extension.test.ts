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
    
  });

//checks if the getSettings func is called proper amount of times
describe('ChatGPTViewProviderTest2', () => {
  let gptsetting: ChatGPTViewProvider;
  it('gets settings', () => {
    gptsetting.getSettings();

    expect(gptsetting.getSettings).toHaveBeenCalledTimes(1);
  });

});