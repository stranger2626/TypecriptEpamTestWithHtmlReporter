"use strict";
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['start-maximized', '--disable-extensions']
        }
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    // Spec patterns are relative to this config file
    specs: ['e2e/specs/**/*spec.js'],
    // For angular tests
    useAllAngular2AppRoots: true,
    // Base URL for application server
    baseUrl: 'http://localhost:8080',
    onPrepare: function () {
        var globals = require('protractor');
        var browser = globals.browser;
        var Reporter_html = require('reporter-html');
        jasmine.getEnv().addReporter(new Reporter_html(browser.params));
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000,
        showTiming: true
    }
};
//# sourceMappingURL=protractor.config.js.map