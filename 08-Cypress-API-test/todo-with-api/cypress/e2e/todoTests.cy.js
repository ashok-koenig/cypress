import { locators } from "../locators"

describe("Todo App - Testing API Calls", ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    // Actual API call test - without mock
    it("should getch todos successfully", ()=>{
        cy.get(locators.todoListItem).should('have.length', 3)
    })

    // Mocking and stubbing with cy.intercept()

    it('should mock the GET request and display mocked todos', ()=>{
        const mockTodos = [
                            {id: 1, title: 'Mocked Todo 1', completed: true}, 
                            {id: 2, title: 'Mocked Todo 2', completed: false}
                        ]

        cy.intercept(Cypress.env('apiUrl'), mockTodos).as('getTodos')

        // Reload the page to trigger the mocked request
        cy.reload();
        cy.wait("@getTodos")

        cy.get(locators.todoListItem).should('have.length', 2)
        cy.contains(mockTodos[0].title).should('be.visible')
        cy.contains(mockTodos[1].title).should('be.visible')
    })

    it('should mock a POST request and display the added todo', ()=>{
        cy.intercept('POST', Cypress.env('apiUrl'), {
            statusCode: 201,
            body: {id: 4, title: 'Mocked new Todo', completed: false}
        }).as('addTodo')

        // Add a new todo
        cy.get(locators.newTodoInput).type('Mocked new Todo{enter}')
        cy.wait('@addTodo')

        // Verify the new todo is diplayed
        cy.contains(locators.todoListItem, 'Mocked new Todo').should('be.visible')
    })

    // Handling External system - failure

    it('should hanlde a 500 error from API', ()=>{
        cy.intercept('GET', Cypress.env('apiUrl'), {
            statusCode: 500,
            body: {message: 'Failed to load todos.'}
        }).as('getTodosError')

        // Reload the page to trigger the mocked error
        cy.reload()
        cy.wait('@getTodosError')

        // Verify that the error message is displayed
        cy.get('.error-message').should('contain.text', 'Failed to load todos.')
    })

    // Testing API Calls with cy.request()

    it('should fetch todos directly using API and validate the response', ()=>{
        cy.request('GET', Cypress.env('apiUrl')).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.length.greaterThan(0)
        })
    })

    // intercepting network requests

    it('should intercept and delay a GET request', ()=>{
        cy.intercept('GET', Cypress.env('apiUrl'), {
            delayMs: 3000,
            body: [
                {id: 1, title: 'Mocked Todo 1', completed: true}, 
                {id: 2, title: 'Mocked Todo 2', completed: false}
            ]
        }).as('getTodosDelayed')

        cy.reload()
        cy.wait('@getTodosDelayed')

        cy.get(locators.todoListItem).should('have.length', 2)
        cy.contains('Mocked Todo 1').should('be.visible')
        cy.contains('Mocked Todo 2').should('be.visible')
    })

    // Working with Fixtures

    it('should mock GET request using a fixture file', ()=>{
        cy.intercept('GET', Cypress.env('apiUrl'), {
            fixture: 'todos.json'
        }).as('getTodos')

        cy.reload()
        cy.wait('@getTodos')

        cy.get(locators.todoListItem).should('have.length', 2)
        cy.contains('Fixture Todo 1').should('be.visible')
        cy.contains('Fixture Todo 2').should('be.visible')
    })

    it('should dynamically modify fixture date and intercept', ()=>{
        cy.fixture('todos.json').then((todos)=>{
            todos[1].completed = true

            cy.intercept('GET', Cypress.env('apiUrl'), todos).as('getTodos')

            cy.reload()
            cy.wait('@getTodos')

            cy.get(locators.todoListItem).should('have.length', 2)

            cy.contains('Fixture Todo 2').parent().find('input[type="checkbox"]').should('be.checked')

        })
    })

    // End-to-End Scenario

    it('should complete the full todo flow: add, toggle, delete', ()=>{
        const itemTitle  = 'End-to-End Test Todo'
        cy.get(locators.newTodoInput).type(`${itemTitle}{enter}`)

        cy.contains(itemTitle).should('be.visible')

        cy.contains(itemTitle).parent().find('input[type="checkbox"]').click().should('be.checked')

        cy.contains(itemTitle).parent().find(locators.deleteTodoButton).click()

        cy.contains(itemTitle).should('not.exist')
    })
})