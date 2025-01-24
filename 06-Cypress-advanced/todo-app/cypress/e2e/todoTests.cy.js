import { locators } from "../locators";

describe('Todo app all functionalities' , ()=> {

    describe('Add todo items functionality' , ()=> {
        beforeEach(()=>{
            cy.visit('/')
        });

        it('should add todos dynamically from fixture data', ()=>{
            cy.fixture('todos').then((todos)=>{
                todos.forEach((item)=>{
                    cy.addTodo(item.title)
                    cy.contains(locators.item.list, item.title).should('be.visible')
                })
            })
        });

    });


    describe('Toggle Todo status functionality' , ()=> {
        beforeEach(()=>{
            cy.visit('/')
            cy.fixture('todos').then((todos)=>{
                todos.forEach((item)=> cy.addTodo(item.title))
            })
        });

        it('should toggle todo status', ()=>{
            let itemTitle = 'Install cypress npm'
            // Mark an item completed
            cy.toggleTodo(itemTitle)

            cy.contains(locators.item.list, itemTitle).find(locators.item.toggle).should('be.checked')

            // Mark an item as incomplete / active
            cy.toggleTodo(itemTitle)

            cy.contains(locators.item.list, itemTitle).find(locators.item.toggle).should('not.be.checked')

        })

    });

    describe('Delete Todos functionality' , ()=> {
        beforeEach(()=>{
            cy.visit('/')
            cy.fixture('todos').then((todos)=>{
                todos.forEach((item)=> cy.addTodo(item.title))
            })
        });

        it('should delete todo item' ,()=>{
            let itemTitle = 'Launch cypress test runner'
            cy.deleteTodo(itemTitle)
            cy.contains(locators.item.list, itemTitle).should('not.exist')
        })

    }); 
    
    describe('Filter Todos functionality' , ()=> {
        let itemTitle = 'Launch cypress test runner'
        
        beforeEach(()=>{
            cy.visit('/')
            cy.fixture('todos').then((todos)=>{
                todos.forEach((item)=> cy.addTodo(item.title))
            })            
            cy.toggleTodo(itemTitle)
        });

        it('should display all todos', ()=>{
            cy.get(locators.main.filter.all).click()
            cy.get(locators.item.list).should('have.length', 3)
        })

        it('should display only active todos', ()=>{
            cy.get(locators.main.filter.active).click()
            cy.get(locators.item.list).should('have.length', 2)
            cy.contains(locators.item.list, itemTitle).should('not.exist')
        })

        it('should display only completed todos', ()=>{
            cy.get(locators.main.filter.completed).click()
            cy.get(locators.item.list).should('have.length', 2)
            cy.contains(locators.item.list, itemTitle).should('be.visible')
        })

    });    
});