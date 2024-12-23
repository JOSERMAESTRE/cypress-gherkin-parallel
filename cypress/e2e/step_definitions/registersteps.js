const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RegisterPage from '../../pages/RegisterPage';

const registerPage = new RegisterPage();

Given('The user navigates to the registration page', () => {
    registerPage.visit('/register');
});

When('user fills the registration form with the following data:', (dataTable) => {
    registerPage.Register(dataTable);
});

Then('Page shows a success message', () => {
    cy.url().should('include', "registerresult");
});