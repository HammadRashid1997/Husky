const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 120000, // Set to a higher value if needed, in milliseconds

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
