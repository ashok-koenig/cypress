// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { locators } from "../locators"

// Custom Command to add todo item
Cypress.Commands.add('addTodo', (title)=> {
    cy.get(locators.main.addItemInput).type(`${title}{enter}`)
})

Cypress.Commands.add('toggleTodo', (title)=>{
    cy.contains(locators.item.list, title).find(locators.item.toggle).click()
})

Cypress.Commands.add('deleteTodo', (title)=>{
    cy.contains(locators.item.list, title).find(locators.item.deleteButton).click()
})