"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe("This is the first example of protractor", function () {
    it("should have a title", function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get("http://www.google.com");
        expect(protractor_1.browser.getTitle()).toEqual("Google");
    });
});
