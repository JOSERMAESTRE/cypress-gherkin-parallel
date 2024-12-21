const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  const bundler = createBundler({ plugins: [] });
  on('file:preprocessor', bundler);
  await addCucumberPreprocessorPlugin(on, config);
  allureWriter(on, config);
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://example.com', // Cambia según tu aplicación
    env: {
      allure: true,
      allureResultsPath: 'cypress/allure-results',
    },
  },
});
