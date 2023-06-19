const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    "env": {
      "codeCoverage": {
        "url": "http://localhost:8081/__coverage__",
        "expectBackendCoverageOnly": true
      }
    },
    setupNodeEvents(on, config) {
      return require('@cypress/code-coverage/task')(on, config)
      // implement node event listeners here
    },
  },
});
