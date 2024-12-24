const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MenuBurgerResponsive from "../../pages/MenuBurgerResponsive";
const menuBurgerResponsive = new MenuBurgerResponsive();

Given('user is on home page as {string}', (device) => { 
    menuBurgerResponsive.Devices(device);
});

When('user clicks on the burger menu', () => {
    menuBurgerResponsive.clickMenuBurger();
});

Then('user clicks on {string}', (menu) => {
    menuBurgerResponsive.clickMenuComputer(menu);
});

Then('user clicks on {string} submenu', (submenu) => {
    menuBurgerResponsive.clickSubmenuDesktop(submenu);
});

Then('user should see the {string} page', (title) => {
    cy.title().should('include', title);	
});
