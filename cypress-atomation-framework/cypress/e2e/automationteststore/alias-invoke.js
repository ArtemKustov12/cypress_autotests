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
        // // define the amounts which are not on sale
        // cy.get('.thumbnail').find('.oneprice').each(($el) => {
        //     cy.log($el.text());
        //   });
          
        // defeni all current amounts of the products sum them and print in the log
        let total = 0;

        cy.get('.oneprice, .pricenew').each(($el) => {
            const priceStr = $el.text().replace('$', '');
            const price = parseFloat(priceStr);
            total += price;
          }).then(() => {
            cy.log(`Total price: $${total.toFixed(2)}`);
          });
    });
});
