const assert = require('assert')
const { add, subtract } = require('../calculator')

describe('Calculator Functions', ()=>{

    describe('Addition', ()=>{
        it('should return the sum of two positive numbers', ()=>{
        const result = add(100, 200)
        assert.strictEqual(result, 300)
        }) 
        it('should return the sum of two negative numbers', ()=>{
            const result = add(-100, -200)
            assert.strictEqual(result, -300)
        }) 
        it('should return the sum of a positive and negative number', ()=>{
            const result = add(-100, 200)
            assert.strictEqual(result, 100)
        }) 
    })
   
    describe("Substraction", ()=>{
        it('should return the difference of two numbers', ()=>{
            const result = subtract(300, 100)
            assert.strictEqual(result, 200)
        })
    })
   
})