class Base {

    visit(Url) {
        cy.visit(Url);
    }

    getElement(Locator) {
        return cy.get(Locator);
    }

    typeText(locator, text) {
        this.getElement(locator).type(text);
    }

    click(locator) {
        this.getElement(locator).click();
    }

    verifyURLIncludes(text) {
        cy.url().should(include, text);
    }
}

export default Base;