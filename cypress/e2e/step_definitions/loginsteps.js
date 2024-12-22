const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given('user open the login page', () => {
    cy.visit('https://demowebshop.tricentis.com/login');
});

When('user enter {string} and {string} and user click on the login button', (username, password) => {
    cy.get('#Email').type(username);
    cy.get('#Password').type(password);
    cy.get('.login-button').click();
});

Then('{string} should see the dashboard page', (username) => {
    cy.get('a').contains(username).should('exist');
});
