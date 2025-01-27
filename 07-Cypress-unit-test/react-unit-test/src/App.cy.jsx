import React from 'react'
import {mount} from 'cypress/react'
import App from './App'

describe('App Component', () => {
  beforeEach(()=>{
    mount(<App />)
  })

  it('renders the heading', ()=>{
    cy.get('h1').should('contain.text', 'Vite + React')
  })

  it('renders the button with initial count', ()=>{
    cy.get('button').should('contain.text', 'count is 0')
  })

  it('increments the count when button is clicked', ()=>{
    cy.get('button').click()
    cy.get('button').should('contain.text', 'count is 1')
  })
})