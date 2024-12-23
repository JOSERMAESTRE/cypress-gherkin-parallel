class Base {
    visit(URL){
        cy.visit(URL);
    }

    getElement(locator){
       return cy.get(locator);
    }

    type(text, locator){
        cy.get(locator).type(text);
    }

    click(locator){
        cy.get(locator).click();
    }

    verifyURLincludes(text){
        cy.url().should('include', text);    
    }
}
export default Base;