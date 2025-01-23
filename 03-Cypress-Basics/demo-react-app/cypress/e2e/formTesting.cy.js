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
        cy.get("input[name='firstname']").type("John")
        cy.get("input[name='firstname']").should("have.value", "John")
    })

    it("displays validation errors when fields are empty", ()=>{       
        cy.get("button[type='submit']").click()

        cy.contains('First name is required.').should('be.visible')
        cy.contains('Last name is required.').should('be.visible')
        cy.contains('Email is required.').should('be.visible')
    })

    it("displays an error for an invalid email", ()=>{        
        cy.get("input[name='firstname']").type("John")
        cy.get("input[name='lastname']").type("Peter")
        cy.get("input[name='email']").type("invalidemail")
        cy.get("button[type='submit']").click()

        cy.contains('Email is invalid.').should('be.visible')
    })

    it("submits the form successfully when all fields are valid", ()=>{       
        cy.get("input[name='firstname']").type("John")
        cy.get("input[name='lastname']").type("Peter")
        cy.get("input[name='email']").type("john@email.com")
        cy.get("button[type='submit']").click()

        cy.contains('Submitted Data').should('be.visible')
        cy.contains('John Peter').should('be.visible')
        cy.contains('john@email.com').should('be.visible')
    })

    it("clears error message on successful submission", ()=>{ 
        cy.get("button[type='submit']").click()
        cy.contains('First name is required.').should('be.visible')
        cy.contains('Last name is required.').should('be.visible')
        cy.contains('Email is required.').should('be.visible')

        cy.get("input[name='firstname']").type("John")
        cy.get("input[name='lastname']").type("Peter")
        cy.get("input[name='email']").type("john@email.com")
        cy.get("button[type='submit']").click()

        cy.contains('First name is required.').should('not.exist')
        cy.contains('Last name is required.').should('not.exist')
        cy.contains('Email is required.').should('not.exist')
    })
})