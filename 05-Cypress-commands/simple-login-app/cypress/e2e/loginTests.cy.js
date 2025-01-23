import { locators } from "../locators"

describe('Login Functionality', ()=>{
    // Variables for all test in the test suite
    let validUsername;
    let validPassword;
    let invalidUsername;
    let invalidPassword;
    let errorMessage;

    before(()=>{
        // Load Fixture data before running tests
        cy.fixture('user.json').then((userData)=>{
            validUsername = userData.valid.username;
            validPassword = userData.valid.password;
            invalidUsername = userData.invalid.username;
            invalidPassword = userData.invalid.password;
            errorMessage = userData.errorMessage;
        })
    })

    beforeEach(()=>{
        cy.visit('/')
        // cy.fixture('user.json').as('userData') // Load the user fixture and use alias
    })

    it('display an error for invalid credentials', ()=>{
        cy.login(invalidUsername, invalidPassword)
        cy.wait(2000)
        cy.get(locators.login.errorMessage).as("errorField")
        cy.get("@errorField").should('be.visible')
        cy.get("@errorField").should('contain', errorMessage)
    })

    it('should navigate to dashbaord for valid credentials', function() {
        // cy.login(this.userData.username, this.userData.password)
        cy.login(validUsername, validPassword)
        cy.url().should('include','/dashboard')
        cy.get(locators.dashboard.heading).should('contain', 'Dashboard')
    })
})