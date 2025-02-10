const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    screenshotsFolder: "cypress/screenshots", 
    screenshotOnRunFailure: true, // Capture screenshot on test failure
    videosFolder: "cypress/videos", // Folder for videos
    video: true,
  },
});
