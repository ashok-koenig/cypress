import { locators } from "../locators"

describe("React Form Testing", ()=> {

    before(()=>{
        // Runs once before all test
        cy.log("Starting react app tests")
    })

    after(()=>{
        // Runs once after all test
        cy.log("Completed react app tests")
    })

    beforeEach(()=>{
        // Runs before each test
        // cy.visit(Cypress.env("appUrl"))
        cy.visit("/")
    })

    afterEach(()=>{
        // Runs after each test
        cy.log("Test Completed")
    })


    it("fill the first name input field and check the value", ()=>{        
        cy.get(locators.form.firstnameInput).type("John")
        cy.get(locators.form.firstnameInput).should("have.value", "John")
    })

    it("displays validation errors when fields are empty", ()=>{       
        cy.get(locators.form.submitButton).click()

        cy.get(locators.form.firstnameError).should("contain", "First name is required.")
        cy.get(locators.form.lastnameError).should("contain", "Last name is required.")
        cy.get(locators.form.emailError).should("contain", "Email is required.")
    })

    it("displays an error for an invalid email", ()=>{        
        cy.get(locators.form.firstnameInput).type("John")
        cy.get(locators.form.lastnameInput).type("Peter")
        cy.get(locators.form.emailInput).type("invalidemail")
        cy.get(locators.form.submitButton).click()

        cy.get(locators.form.emailError).should("contain", "Email is invalid.")
    })

    it("submits the form successfully when all fields are valid", ()=>{       
        cy.get(locators.form.firstnameInput).type("John")
        cy.get(locators.form.lastnameInput).type("Peter")
        cy.get(locators.form.emailInput).type("john@email.com")
        cy.get(locators.form.submitButton).click()

        cy.get(locators.form.submittedData).should("be.visible")
        cy.get(locators.form.submittedData).find(locators.form.submittedDataTitle).should("contain", "Submitted Data")
        cy.get(locators.form.submittedData).find(locators.form.submittedDataName).should("contain", "John Peter")
        cy.get(locators.form.submittedData).find(locators.form.submittedDataEmail).should("contain", "john@email.com")

    })

    it("clears error message on successful submission", ()=>{ 
        cy.get(locators.form.submitButton).click()
        cy.get(locators.form.firstnameError).should("contain", "First name is required.")
        cy.get(locators.form.lastnameError).should("contain", "Last name is required.")
        cy.get(locators.form.emailError).should("contain", "Email is required.")

        cy.get(locators.form.firstnameInput).type("John")
        cy.get(locators.form.lastnameInput).type("Peter")
        cy.get(locators.form.emailInput).type("john@email.com")
        cy.get(locators.form.submitButton).click()

        cy.contains('First name is required.').should('not.exist')
        cy.contains('Last name is required.').should('not.exist')
        cy.contains('Email is required.').should('not.exist')
    })
})