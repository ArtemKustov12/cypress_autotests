/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />


describe('Cypress web security', () => {
    it('Validate visisting to different domains', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/');
        
    });

    it('Validate visisting to different domains via user actions', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });
    
});