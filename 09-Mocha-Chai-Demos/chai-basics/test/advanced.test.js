const { expect } = require('chai')

describe("Deep Equality, Truthiness, and other Assertions", ()=>{
    // Deep Equality Tests
    describe("Deep Equality Assertions", ()=>{
        it("should verify deep equality for objects", ()=>{
            const person1 = {name: 'John', skills: ['JavaScript', "Cypress"]}
            const person2 = {name: 'John', skills: ['JavaScript', "Cypress"]}
            const person3 = {name: 'Smith', skills: ['JavaScript', "Mocha"]}

            expect(person1).to.deep.equal(person2) // Deep equality
            expect(person1).to.not.deep.equal(person3) // Different content
        })

        it('should verify deep equality for arrays', ()=>{
            const array1 = [1, 2, {key: 'value'}]
            const array2 = [1, 2, {key: 'value'}]
            const array3 = [1, 3, {key: 'different'}]

            expect(array1).to.deep.equal(array2)
            expect(array1).to.not.deep.equal(array3)
        })
    })

    // Truthiness Tests
    describe('Truthiness Assertions', ()=>{
        it('should verify truthy values', ()=>{
            expect(true).to.be.true;
            expect('hello').to.be.ok; // checks if the value is truthy
            expect([]).to.exist; // Empty arrays are truthy
        })

        it('should verify falsy values', ()=>{
            expect(false).to.be.false;
            expect(null).to.be.null;
            expect(undefined).to.be.undefined;
            expect('').to.not.be.ok;  // Empty strings are falsy
        })
    })

    // Array assertions
    describe('Array Assertions', ()=>{
        it('should verify array contents', ()=>{
            const arr = [1, 2, 3, 4]

            expect(arr).to.include(3) // contains specific value
            expect(arr).to.have.lengthOf(4)
            expect(arr).to.not.include(10) // does not contain 10
        })
    })

    // Object assertions
    describe('Object assertions', ()=>{
        it('should verify object properties', ()=>{
            const user = {id: 1, name: 'John', age: 25}

            expect(user).to.have.property('name')  // has peroperty 'name'
            expect(user).to.have.property('age', 25) // has property 'age' with specify value
            expect(user).to.not.have.property('address') // does not have property 'address'
            expect(user).to.include({name: 'John'})  // Includes subset of properties. 
        })
    })

    // Error Assertions
    describe('Error Assertions', ()=>{
        it('should verify error throwing', ()=>{
            const throwError = () => {
                throw new Error('Something went wrong')
            }

            expect(throwError).to.throw('Something went wrong')
        })

        it('should verify non-throwing functions', ()=>{
            const doNothing = () => "No error"

            expect(doNothing).to.not.throw()
        })
    })

    // Number and Range Assertions
    describe('Number and Range Assertions', ()=>{
        it('should verify numbers and ranges', () =>{
            const value = 42;

            expect(value).to.be.a('number')
            expect(value).to.equal(42)
            expect(value).to.be.above(40) // Greater than
            expect(value).to.be.below(50) // Less than
            expect(value).to.be.within(40, 50) // within range
        })
    })
})