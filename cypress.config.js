const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
   "reportDir": "cypress/reports",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      })

    },
    chromeWebSecurity: false,
    redirectionLimit: 100,
    viewportWidth:1280,
    viewportHeight: 1000,
    defaultCommandTimeout: 1000,
    experimentalSessionAndOrigin: true,
    numTestsKeptInMemory: 0,
    pageLoadTimeout:3000,
  },
  env:{
    "url":"https://practice.expandtesting.com/notes/app",
    "host":"127.0.0.1",
    "dashboard":"https://practice.expandtesting.com/notes/app"
  },
});
