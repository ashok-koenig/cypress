const assert = require('assert')
const counterApp = require('../counter')

describe('Counter App', ()=>{
    before(()=>{
        console.log('Staring counter app tests...')
    })
    after(()=>{
        console.log('Completed counter app tests...')
    })

    beforeEach(()=>{
        counterApp.reset()
    })

    afterEach(()=>{
        console.log(`Counter value after test: ${counterApp.getValue()}`)
    })

    it('should start at 0', ()=>{
        const value = counterApp.getValue();
        assert.strictEqual(value, 0, 'Counter should start at 0')
    })

    it('should increment the counter', ()=>{
        counterApp.increment();
        const value = counterApp.getValue();
        assert.strictEqual(value, 1, "Counter should increment to 1")
    })

    it('should decrement the counter', ()=>{
        counterApp.increment()
        counterApp.decrement()
        const value = counterApp.getValue();
        assert.strictEqual(value, 0, 'Counter should start at 0')
    })
})