"use strict";
var protractor_1 = require('protractor');
var epamComponent;
var EpamHomePage = (function () {
    function EpamHomePage() {
    }
    EpamHomePage.openPage = function () {
        protractor_1.browser.get('https://www.epam.com/');
    };
    ;
    EpamHomePage.goToSolutionsPage = function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="solutions"]'))), 15000);
        return protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="solutions"]')).click();
    };
    ;
    EpamHomePage.goToIdeasPage = function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="ideas"]'))), 15000);
        return protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="ideas"]')).click();
    };
    ;
    EpamHomePage.goToIndustriesPage = function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="industries"]'))), 15000);
        return protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="industries"]')).click();
    };
    ;
    EpamHomePage.goToCareerPage = function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="careers"]'))), 15000);
        return protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="careers"]')).click();
    };
    ;
    EpamHomePage.goToContactPage = function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="contact"]'))), 15000);
        return protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="contact"]')).click();
    };
    EpamHomePage.title = 'EPAM | Software Product Development Services';
    return EpamHomePage;
}());
exports.EpamHomePage = EpamHomePage;
//# sourceMappingURL=epam.homePage.js.map