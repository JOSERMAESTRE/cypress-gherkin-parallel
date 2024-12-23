const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from '../../pages/LoginPage';

// Crear la instancia de la clase LoginPage una sola vez
const loginPage = new LoginPage();

Given('user open the login page', () => {
    loginPage.visit('/login');  // Llamada al método visit de la página de login
});

When('user enter {string} and {string} and user click on the login button', (username, password) => {
    loginPage.Login(username, password);  // Llamada al método Login con los parámetros username y password
});

Then('{string} should see the dashboard page', (username) => {
    loginPage.getElement('a').contains(username).should('exist');  // Verificación de la existencia del nombre de usuario en la página del dashboard
});
