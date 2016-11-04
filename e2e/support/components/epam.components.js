"use strict";
var protractor_1 = require('protractor');
var EpamComponent = (function () {
    function EpamComponent() {
        this.solutionsMenuItem = protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="solutions"]'));
        this.industriesMenuItem = protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="industries"]'));
        this.aboutMenuItem = protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="about"]'));
        this.ideasMenuItem = protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="ideas"]'));
        this.contactMenuItem = protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="contact"]'));
        this.careerMenuItem = protractor_1.element(protractor_1.by.css('.popup-menu li a[href$="careers"]'));
        this.searchButtonMenuItem = protractor_1.element(protractor_1.by.css('.header-menu-search-button'));
        this.searchInput = protractor_1.element(protractor_1.by.css('.search-group input'));
        this.autocompleteField = protractor_1.element(protractor_1.by.css('.autocomplete-suggestions strong'));
        this.searchButton = protractor_1.element(protractor_1.by.css('.button-ui'));
        this.serchHeader = protractor_1.element(protractor_1.by.css('.search-header h1'));
    }
    return EpamComponent;
}());
exports.EpamComponent = EpamComponent;
//# sourceMappingURL=epam.components.js.map