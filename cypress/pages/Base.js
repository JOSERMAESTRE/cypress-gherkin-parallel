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

     isDisplayed(locator){
        try {
            cy.get(locator).should('be.visible');
            return true;
        } catch (error) 
        {
            return false;
        }

     }
        
}
export default Base;