const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "http://host.docker.internal:3000/api/"
  },
}); 
