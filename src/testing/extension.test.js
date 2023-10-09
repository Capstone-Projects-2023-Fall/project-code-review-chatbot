"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
(0, mocha_1.describe)('ChatGPTViewProvider Tests', () => {
    let provider;
    it('should set authentication info', () => {
        // Replace with our API key once we have it
        const authInfo = { apiKey: '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' };
        provider.setAuthenticationInfo(authInfo);
        (0, chai_1.expect)(provider['_authInfo']).to.equal(authInfo);
    });
});
//# sourceMappingURL=extension.test.js.map