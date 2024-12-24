import Base from "./Base";

class CheckingOut extends Base {
    constructor() {
        super();
        this.barnotice = '.bar-notification';
        this.linkshoppingcart = '#topcartlink';
        this.termsofservice = '#termsofservice';
        this.checkoutbutton = '#checkout';
        this.guestcheckoutbutton = 'input[value="Checkout as Guest"]';
    }

    CheckingOutMethod() {
        cy.on('window:alert', (alertText) => {
            // Aquí puedes comprobar el texto de la alerta si lo deseas
            expect(alertText).to.contains('The product has been added to your shopping cart');
            // Cypress cierra la alerta automáticamente
        });

        this.click(this.linkshoppingcart);
        this.click(this.checkoutbutton);
        this.click(this.termsofservice);
        this.click(this.checkoutbutton);
        this.click(this.guestcheckoutbutton);

    }
}

export default CheckingOut;