const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      return require('@cypress/code-coverage/task')(on, config);
      // implement node event listeners here
    },
  },
});
