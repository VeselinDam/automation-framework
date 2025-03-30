const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", 
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 20000,
    viewportWidth: 1400,
    viewportHeight: 960,
    baseUrl: "https://jira.trungk18.com/project/board"
  },
});
