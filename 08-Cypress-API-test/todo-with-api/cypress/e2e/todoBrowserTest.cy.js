import { locators } from "../locators"

describe('Todo App - Handling Browser-Specific Issue', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('should add items differently acrross browsers', ()=>{
        cy.log(Cypress.browser.name)
        
         cy.intercept('POST', Cypress.env('apiUrl'), {
                    statusCode: 201,
                    body: {id: 4, title: 'Mocked new Todo from '+ Cypress.browser.name, completed: false}
                }).as('addTodo')
        
                // Add a new todo
                cy.get(locators.newTodoInput).type('Mocked new Todo{enter}')
                cy.wait('@addTodo')
        
                // Verify the new todo is diplayed
                cy.contains(locators.todoListItem, 'Mocked new Todo from '+ Cypress.browser.name).should('be.visible')
    })
})