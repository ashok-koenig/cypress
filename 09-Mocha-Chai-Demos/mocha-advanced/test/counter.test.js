const assert = require('assert')
const counterApp = require('../counter');

describe('Counter App', ()=>{
    beforeEach(()=>{
        counterApp.reset();
    })

    it('should start at 0', ()=>{
        const value = counterApp.getValue();
        assert.strictEqual(value, 0)
    })

    it('should increment the counter', ()=>{
        counterApp.increment()
        const value = counterApp.getValue();
        assert.strictEqual(value, 1)
    })

    // Skipping this test
    it.skip('should decrement the counter', ()=>{
        counterApp.increment()
        counterApp.decrement()
        const value = counterApp.getValue();
        assert.strictEqual(value, 0)
    })

    // Focus on this specific test
    // it.only('should reset the counter', ()=>{
    it('should reset the counter', ()=>{
        counterApp.increment()
        counterApp.increment()
        counterApp.reset()
        const value = counterApp.getValue();
        assert.strictEqual(value, 0)
    })
})