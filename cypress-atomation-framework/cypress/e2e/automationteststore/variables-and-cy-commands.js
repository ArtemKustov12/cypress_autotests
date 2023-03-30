/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />


describe("Verifying variables, cyprsess commands and JQuery commands", () => {
    // it("navigate to  specific product pages", () => {
    //     // Not reccomended
    //     cy.visit('https://automationteststore.com/');
    //     const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    //     const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    //     makeupLink.click();
    //     skincareLink.click();


    //     // Recomended approach
    //     cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    //     cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    // });

    it.only("navigate to  specific product pages", () => {

        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        // const header = cy.get("h1 .maintext");
        // cy.log(header);

        cy.get("h1 .maintext").then(($headerText)=> {
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq("Makeup");
        })
    });
});