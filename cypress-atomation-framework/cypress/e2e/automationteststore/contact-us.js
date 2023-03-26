/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />


describe("Test Contack US form via WbdriverUni", () => {
    it("Should be able to submit a successful submition via contact us form", () => {
        // cypress code
        cy.visit('https://automationteststore.com/');
        //cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type('John');
        cy.get('#ContactUsFrm_email').type('Smith@fake.xom');
        cy.get('#ContactUsFrm_enquiry').type('test enquiry');
        cy.get('.col-md-6 > .btn').click();
    });

    // it("Should NOT be able to submit a successful submition via contact us form as all fields are required", () => {
    //     // cypress code
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    //     cy.get('[name="first_name"]').type('Joe');
    //     cy.get('[name="last_name"]').type('Doe');
    //     cy.get('textarea.feedback-input').type('Commets here');
    //     cy.get('[type="submit"]').click();
    // });
});