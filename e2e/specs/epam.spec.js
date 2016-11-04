"use strict";
var protractor_1 = require('protractor');
var epam_components_1 = require('../support/components/epam.components');
var epam_homePage_1 = require('../support/pages/epam.homePage');
var epam_solutionPage_1 = require('../support/pages/epam.solutionPage');
var epam_careerPage_1 = require('../support/pages/epam.careerPage');
var epam_ideasPage_1 = require('../support/pages/epam.ideasPage');
var epam_industriesPage_1 = require('../support/pages/epam.industriesPage');
var epam_contactPage_1 = require('../support/pages/epam.contactPage');
describe('Header navigation', function () {
    var epamComponent;
    beforeAll(function () {
        epamComponent = new epam_components_1.EpamComponent();
        protractor_1.browser.ignoreSynchronization = true;
    });
    beforeEach(function () {
        epam_homePage_1.EpamHomePage.openPage();
    });
    it('check Solution Page', function () {
        epam_homePage_1.EpamHomePage.goToSolutionsPage();
        expect(protractor_1.browser.getTitle()).toEqual(epam_solutionPage_1.EpamSolutionPage.title);
    });
    it('check Ideas Page', function () {
        epam_homePage_1.EpamHomePage.goToIdeasPage();
        expect(protractor_1.browser.getTitle()).toEqual(epam_ideasPage_1.EpamIdeasPage.title);
    });
    it('check Industries Page', function () {
        epam_homePage_1.EpamHomePage.goToIndustriesPage();
        expect(protractor_1.browser.getTitle()).toEqual(epam_industriesPage_1.EpamIndustriesPage.title);
    });
    it('check Career Page', function () {
        epam_homePage_1.EpamHomePage.goToCareerPage();
        expect(protractor_1.browser.getTitle()).toEqual(epam_careerPage_1.EpamCareerPage.title);
    });
    it('check Contact Page', function () {
        epam_homePage_1.EpamHomePage.goToContactPage();
        expect(protractor_1.browser.getTitle()).toEqual(epam_contactPage_1.EpamContactPage.title);
    });
});
describe('Job search', function () {
    var epamComponent;
    beforeAll(function () {
        epamComponent = new epam_components_1.EpamComponent();
        protractor_1.browser.ignoreSynchronization = true;
        //driver.manage().window().maximize() ;
    });
    beforeEach(function () {
        epam_homePage_1.EpamHomePage.openPage();
    });
    it('search and autocomplete should work', function () {
        expect(protractor_1.browser.getTitle()).toEqual(epam_homePage_1.EpamHomePage.title);
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(epamComponent.careerMenuItem), 15000);
        epamComponent.careerMenuItem.click();
        expect(protractor_1.browser.getTitle()).toEqual(epam_careerPage_1.EpamCareerPage.title);
        epamComponent.searchButtonMenuItem.click();
        epamComponent.searchInput.sendKeys("JavaScript");
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(epamComponent.autocompleteField), 15000);
        expect((epamComponent.autocompleteField).getText()).toEqual("javascript");
        epamComponent.searchButton.click();
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(epamComponent.serchHeader), 15000);
        expect((epamComponent.serchHeader).getText()).toContain('We found');
    });
});
//# sourceMappingURL=epam.spec.js.map