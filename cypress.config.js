const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'att387',
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on('task', {
        allureWriter: (results, config) => {
          console.log('Generando resultados para Allure');
          return allureWriter(results, config);
        }
      });

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    stepDefinitions: "cypress/e2e/step_definitions/*.js",
    baseUrl: "https://demowebshop.tricentis.com/",
    supportFile: "cypress/support/e2e.js",
  },
});