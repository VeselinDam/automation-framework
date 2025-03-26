const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 20000,
    viewportWidth: 1400,
    viewportHeight: 960,
    baseUrl: "https://jira.trungk18.com/project/board"
  },
});
