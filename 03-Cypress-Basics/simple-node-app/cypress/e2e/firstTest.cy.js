describe('First Cypress Test', ()=>{
    // Test case: Visit a page and verify its title
    it('Visits the Cypress website and verifies the title', ()=> {
        cy.visit('https://example.cypress.io') // Visit the URL
        cy.title().should('eq', 'Cypress.io: Kitchen Sink') // Asset the page title
    })
} )