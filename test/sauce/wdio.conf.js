exports.config = {
    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack and Testing Bot (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
 
    //
    // If you are using Sauce Labs, WebdriverIO takes care to update the job information
    // once the test is done. This option is set to `true` by default.
    //
    updateJob: true,
 
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './sauce.js'
    ],
    //
    // ============
    // Capabilities
    // ============
 
    // Define your capabilities here. WebdriverIO can run multiple capabilties at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude option in
    // order to group specific specs to a specific capability.
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://wiki.saucelabs.com/display/DOCS/Platform+Configurator
    //
    capabilities: [{
        browserName: 'firefox',
        version: 37,
        name: 'Firefox Selenium tests',
        build: process.env.BUILD_NUMBER
    },{
        browserName: 'chrome',
        version: 43,
        name: 'Chrome Selenium tests',
        build: process.env.BUILD_NUMBER
    },{
        browserName: 'safari',
        version: 6,
        name: 'Safari Selenium tests',
        build: process.env.BUILD_NUMBER
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity.
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
 
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", the base url gets prepended.
    baseUrl: 'http://nodejs.org',
 
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 10000,
 
    //
    // Framework you want to run your specs with.
    // The following are supported: mocha, jasmine and cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the node package for the specific framework installed before running
    // any tests. If not please install the following package:
    // Mocha: `$ npm install mocha`
    // Jasmine: `$ npm install jasmine`
    // Cucumber: `$ npm install cucumber`
    framework: 'jasmine',
 
    //
    // Test reporter for stdout.
    // The following are supported: dot (default), spec and xunit
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporter: 'spec',
 
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000
    }
};