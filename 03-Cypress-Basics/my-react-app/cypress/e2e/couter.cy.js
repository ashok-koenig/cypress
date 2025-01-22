describe('React Default App Counter Test', () => {
    it('Visit the React app running in local environment', () => {
      cy.visit('http://localhost:5173/')
    })

    it('Displays the main UI elements', () => {
        cy.visit('http://localhost:5173/')
        cy.contains("Vite + React").should("be.visible")
        cy.get("button").click()
      })

      it('increments the counter when the button is clicked', () => {
        cy.visit('http://localhost:5173/')
        cy.contains("count is 0").should("be.visible")
        cy.get("button").click()
        cy.contains("count is 1").should("be.visible")
      })

      it("applies correct styling to the button", ()=>{
        cy.visit('http://localhost:5173/')
        cy.get("button").should("have.css", "background-color").and("eq", "rgb(249, 249, 249)")
      })
  })