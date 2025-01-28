const chai = require('chai')
const { mathUtils, datautils } = require('../app')
const {assert, expect} = chai
chai.should();

describe('App Tests - Chai assertions', ()=>{
    // Assert style
    describe('Chai assert sytle', ()=>{
        it('should add two numbers', ()=>{
            const result = mathUtils.add(100, 200)
            assert.strictEqual(result, 300, 'Expected result to be 300')
        })

        it('should throw an error when dividing by zero', ()=>{
            assert.throws(()=> mathUtils.divide(10, 0), Error, 'Cannot divide by zero')
        })

        it('should verify deep equality of objects', ()=>{
            const user = datautils.getUser();
            assert.deepEqual(user, {id: 1, name: 'John', role: 'admin'})
        })
    })

    // Expect Style
    describe('Chai Expect Style', ()=>{
        it('shuld miltiply two numbers', ()=>{
            const result = mathUtils.multiply(4, 5)
            expect(result).to.equal(20)
        })

        it('should verify thruthiness of values', ()=>{
            const isAdmin = true;
            expect(isAdmin).to.be.true
            expect(null).to.be.null
        })

        it('should verify contents of an array', ()=>{
            const numbers = datautils.getNumbers();
            expect(numbers).to.be.an('array').that.includes(3)
            expect(numbers).to.have.lengthOf(5)
        })
    })

    // Should Style
    describe('Chai should style', ()=>{
        it('should subtract two numbers', ()=>{
            const result = mathUtils.subtract(10,5)
            result.should.equal(5)
        })
        it('should verify object properties', ()=>{
            const user = datautils.getUser();
            user.should.have.property('name').that.equal('John')
            user.should.have.property('role', 'admin')
        })

        it('should verify array values and properties', ()=>{
            const numbers = datautils.getNumbers()
            numbers.should.include(4)
            numbers.should.have.lengthOf(5)
        })
    })
})