/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />


describe("Alias and Invoke", () => {
    // it('Validate product thumbnail', () => {
    //     cy.visit('https://automationteststore.com/');

    //     cy.get('.thumbnail').then(thumbnails => {
    //         const thumbnailCount = thumbnails.length;
    //         cy.log(`Found ${thumbnailCount} thumbnails on the page`);
    //     }); 

    //     // will not pass, there are no cart on each element
    //     cy.get('.thumbnail')
    //     .should('have.length', 16)
    //     .each(($thumbnail) => {
    //         cy.wrap($thumbnail).find('[title="Add to Cart"]').should('exist')
    //     })
    // });
    
    it('Calculate total of normal and sale products', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').find('.oneprice').each(($el) => {
            cy.log($el.text());
          });        
    });
});
