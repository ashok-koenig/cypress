import { locators } from "../locators"

describe('Todo App - Debugging and Error handling', () =>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Should debug a failing test using cy.pause()', ()=>{
        cy.get(locators.main.addItemInput).type('Debug Todo{enter}')
        cy.get(locators.item.list).should('have.length', 1)

        // cy.pause()
        // cy.get(locators.item.list).should('have.length', 2)
    })

    it('should log detailed information for dybamic data', ()=>{
        const todos = ['Todo 1', 'Todo 2', 'Todo 3']

        todos.forEach((todo, index)=>{
            cy.log(`Adding Todo: ${todo} at Index: ${index}`)
            cy.get(locators.main.addItemInput).type(`${todo}{enter}`)
        })

        cy.get(locators.item.list).should('have.length', todos.length).then((items)=>{
            cy.log(`Number of Todos Found: ${items.length}`)
        })
    })

    it('should verify proper error handling for invalid input', ()=>{
        cy.get(locators.main.addItemInput).type('       {enter}')

        // Verify no todo is added
        cy.get(locators.item.list).should('have.length', 0).then((items)=>{
            expect(items).to.have.length(0, "No todos should be added for invalid input")
        })
    })

    it('should inspect and debug dynamic elements with cy.debug()', ()=>{
        cy.get(locators.main.addItemInput).type('Dynamic Todo{enter}')

        cy.debug()

        cy.contains(locators.item.list, 'Dynamic Todo').debug().should('contain.text', 'Dynamic Todo')
    })

    it('should wait for an element to appear with custom timeout', ()=>{
        cy.get('[data-testid="invalid-element"]', {timeout: 10000}).should('be.visible')
    })
})