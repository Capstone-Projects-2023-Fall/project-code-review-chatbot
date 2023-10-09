import { describe } from 'mocha';
import { expect } from 'chai';
import * as vscode from 'vscode';

import { activate, ChatGPTViewProvider, AuthInfo  } from '../extension';

describe('ChatGPTViewProvider Tests', () => {
    let provider: ChatGPTViewProvider;

    beforeEach(() => {
        provider = new ChatGPTViewProvider(extensionUri);
    });

    it('should set authentication info', () => {
        // Replace with our API key once we have it
        const authInfo: AuthInfo = {apiKey: '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'};
        provider.setAuthenticationInfo(authInfo);
        expect(provider['_authInfo']).to.equal(authInfo);
    });
});