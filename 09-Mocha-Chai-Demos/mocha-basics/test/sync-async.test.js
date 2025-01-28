const assert = require('assert')

describe('Synchronous and Asynchronous Testing', ()=>{

    describe('Synchronous Tests', ()=>{
        it('shoud return "Welcome" as a string', ()=>{
            const message = "Welcome"
            assert.strictEqual(message, "Welcome")
        })
    })

    describe('Asynchronous Tests', ()=>{
        // Using callbacks
        it('should handle asynchronous code with a callback', (done)=> {
            setTimeout(()=>{
                assert.strictEqual(5*2, 10)
                done()
            }, 200)
        })

        // Using Promises
        it('should handle asynchronous code with Promises', ()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    assert.strictEqual(5*2, 10)
                    resolve()
                }, 200)
            })
        })

        // Using async/await
        it('should handle asynchronous code with async/await', async ()=>{
            const fetchData = () => {
                return new Promise((resolve)=>{
                    setTimeout(()=>{                        
                        resolve('Async Data')
                    }, 200)
                })
            }

            const data = await fetchData();
            assert.strictEqual(data, 'Async Data')
        })
    })
})