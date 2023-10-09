import { describe } from 'mocha';
import { expect } from 'chai';
import * as vscode from 'vscode';

import { activate, ChatGPTViewProvider, AuthInfo, Settings  } from '../extension';

describe('ChatGPTViewProvider Tests', () => {
    let provider: ChatGPTViewProvider;
    let testUri: vscode.Uri;

    beforeEach(() => {
        const filePath = '/project-code-review-chatbot/src/extension.ts';
        testUri = vscode.Uri.file(filePath);
        provider = new ChatGPTViewProvider(testUri);
    });

    // setAuthenticateInfo tests
    it('should set authentication info', () => {
        // Replace with our API key once we have it
        const authInfo: AuthInfo = {apiKey: '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'};
        provider.setAuthenticationInfo(authInfo);
        expect(provider['_authInfo']).to.equal(authInfo);
    });


    // getSettings tests
    it('should return the correct settings', () => {
        const expectedSettings: Settings = {
            timeoutLength: 60,
            apiUrl: 'https://api.openai.com/v1',
            model: 'gpt-3.5-turbo'
	};
        provider['_settings'] = expectedSettings;
        const actualSettings = provider.getSettings();

        expect(actualSettings).to.equal(expectedSettings);
    });
});