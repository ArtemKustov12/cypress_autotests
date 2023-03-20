/// <reference types="Cypress" />


describe("Test Contack US form via WbdriverUni", () => {
    it("Should be able to submit a successful submition via contact us form", () => {
        // cypress code
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        // cy.get('#contact-us > .thumbnail').click();
        cy.get('[name="first_name"]').type('Joe');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('testemail@fake.com');
        cy.get('textarea.feedback-input').type('Commets here');
        cy.get('[type="submit"]').click();
    });

    it("Should NOT be able to submit a successful submition via contact us form as all fields are required", () => {
        // cypress code
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('Joe');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('textarea.feedback-input').type('Commets here');
        cy.get('[type="submit"]').click();
    });
});