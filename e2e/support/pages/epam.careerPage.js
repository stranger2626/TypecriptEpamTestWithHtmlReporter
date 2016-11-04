"use strict";
var protractor_1 = require('protractor');
var EpamCareerPage = (function () {
    function EpamCareerPage() {
        this.searchInput = protractor_1.element(protractor_1.by.css('.search-group input'));
    }
    EpamCareerPage.setCareer = function (careerTitle) {
    };
    ;
    EpamCareerPage.title = 'Careers';
    return EpamCareerPage;
}());
exports.EpamCareerPage = EpamCareerPage;
//# sourceMappingURL=epam.careerPage.js.map