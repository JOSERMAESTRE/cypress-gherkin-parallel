const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import BuildComputer from "../../pages/BuildComputer";
const buildComputer = new BuildComputer();

Given('user is on home page with a {string}', (device) => { 
    buildComputer.Device(device);
});

When('user clicks on the item Build your own computer', () => {
    buildComputer.ClickProduct();
});

Then('user builds the computer with the following details:', (dataTable) => {
    buildComputer.BuildComputerMethod(dataTable);
});

Then('the page displays a confirmation message', () => {
    cy.xpath(buildComputer.ConfirmationMessageLocator).should('be.visible');
});   