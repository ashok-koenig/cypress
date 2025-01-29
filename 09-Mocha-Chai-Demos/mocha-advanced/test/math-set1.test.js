const assert = require('assert')
const mathOperations = require('../mathOperations')

describe('Math Operations - Set 1', function(){
    it('should subtract two numbers', () =>{
        const result = mathOperations.add(2, 3)
        assert.strictEqual(result, 5)
    })

    it('should add two numbers after a delay', async ()=>{
        const result = await mathOperations.slowAdd(3, 4, 1000)
        assert.strictEqual(result, 7)
    })
})