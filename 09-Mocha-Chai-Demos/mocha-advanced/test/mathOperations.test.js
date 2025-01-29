const assert = require('assert')
const mathOperations = require('../mathOperations')

describe('Math Operations', function(){
    // Set default timeout and retries for this suite
    this.timeout(5000)
    this.retries(2)

    describe('Synchronous operations', ()=>{
        it('should multiply the values', ()=>{
            let result =1;
            for(let i=1;i<1000000000; i++){
                result =mathOperations.multiply(i, result)
            }
            // console.log(result)
        })
    })

    describe('Asynchronous Operations', ()=> {
        it('should add two numbers afer a delay', async function(){
            const result = await mathOperations.slowAdd(100, 200, 2000)
            assert.strictEqual(result, 300)
        })

        it.skip('should fail if operation takes too long', async function(){
            this.timeout(2000)
            await mathOperations.slowAdd(100, 200, 3000)
        })
    })

    describe('Flaky Operations', () =>{
        it('should pass on retry if flaky options succeeds', async ()=>{
            const result = await mathOperations.flakyOperation();
            assert.strictEqual(result, 'Success!')
        })
    })
})