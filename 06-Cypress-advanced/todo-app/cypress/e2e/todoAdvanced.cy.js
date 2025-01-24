import { locators } from "../locators"

describe('Todo App - Advanced assertion with chai', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('should add todos and verify the list structure', ()=>{       
        cy.fixture('todos').then((items)=>{
           const todos = [...items].map(item=>item.title)       
            items.forEach((item)=>{                
                cy.addTodo(item.title)
            })
            // Varify the length of the todo list
            cy.get(locators.item.list).should('have.length', todos.length)

            // Verify each todo in the list
            cy.get(locators.item.list).each((ele, index)=>{
                cy.wrap(ele).should('contain.text', todos[index])
            })

            // Verify the entire list structure matches
            cy.get(locators.item.title).then((items)=>{
                const itemTexts = [...items].map((item)=> item.textContent);

                // Assert that both arrays match
                expect(itemTexts).to.deep.equal(todos)
            })
        })     

    })

    it('should edit a todo and verify the updated text', ()=>{
        let itemTitle = 'Editable Todo';
        let editedTitle = 'Edited Todo';

        cy.addTodo(itemTitle)

        cy.contains(locators.item.list, itemTitle).find(locators.item.editButton).click();

        cy.get(locators.item.editInput).clear().type(`${editedTitle}{enter}`)

        // Verify the updated todo
        cy.get(locators.item.list).should('have.length', 1)
        cy.get(locators.item.list).first().should('contain.text', editedTitle)
        cy.get(locators.item.list).first().should('not.contain.text', itemTitle)
    })

    it('shoud filter completed todos and validate with advanced assertions', ()=>{
        const todos = ['Completed Todo 1', 'Completed Todo 2'];

        // Add and mark the items completed
        todos.forEach((item)=>{
            cy.addTodo(item);
            cy.toggleTodo(item);
        })

        // Filter by completed todos
        cy.get(locators.main.filter.completed).click()

        // Validate the number of completed todos
        cy.get(locators.item.list).should('have.length', 2)

        // Verify all visible todos are completed
        cy.get(locators.item.list).each((ele) => {
            cy.wrap(ele).find(locators.item.toggle).should('be.checked')
        })

        // Validate the list contains specific titles
        cy.get(locators.item.title).then((items)=>{
            const itemTexts = [...items].map((item)=> item.textContent)
            expect(itemTexts).to.include.members(todos)
        })
    })
})