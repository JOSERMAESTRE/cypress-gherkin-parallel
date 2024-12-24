import Base from "./Base";

class MenuBurgerResponsive extends Base {
    constructor() {
        super();
        this.menuBurger = '#mob-menu-button';
        this.button1 = 'ul.mob-top-menu.show span.expand';
        this.button2 = 'ul.mob-top-menu.show ul.sublist.firstLevel li a';
    }

    Devices(device) {
        cy.viewport(device);
        cy.visit('https://demowebshop.tricentis.com/');
    }

    clickMenuBurger() {
        this.click(this.menuBurger);
    }

    clickMenuComputer(menu) {
        if (menu == 'COMPUTERS') {
            cy.get(this.button1).first().click();
        }
    }   

    clickSubmenuDesktop(submenu) {
        if (submenu == 'Desktops') {
            cy.get(this.button2).first().click();
        }
    }


}
export default MenuBurgerResponsive;