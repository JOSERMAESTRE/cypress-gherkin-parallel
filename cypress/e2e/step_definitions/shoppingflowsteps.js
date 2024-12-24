const {
    Given,
    When,
    Then
} = require("@badeball/cypress-cucumber-preprocessor");
import AddtoCar from '../../pages/AddtoCar';
import CheckingOut from '../../pages/CheckingOut';
import Information from '../../pages/Information';

const addtoCar = new AddtoCar();
const checkingOut = new CheckingOut();
const information = new Information();

Given('user is on home page', () => {
    addtoCar.visit("https://demowebshop.tricentis.com/");
});

When('user searchs for a {string} and add to the cart', (item) => {
    addtoCar.AddtoCarMethod(item);
});

Then('user should go to checkout page', () => {
    checkingOut.CheckingOutMethod();
});

Then('user should fill the checkout form with the following data:', (dataTable) => {
    information.Billingaddress(dataTable);
});

Then('user should see the order confirmation page', () => {
    cy.url().should('include', "/completed");
});