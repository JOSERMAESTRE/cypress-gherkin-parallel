const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from '../../pages/LoginPage';

const loginPage = new LoginPage();

Given('user open the login page', () => {
    loginPage.visit('/login'); 
});

When('user enter {string} and {string} and user click on the login button', (username, password) => {
    loginPage.Login(username, password); 
});

Then('{string} should see the dashboard page', (username) => {
    loginPage.getElement('a').contains(username).should('exist'); 
});
