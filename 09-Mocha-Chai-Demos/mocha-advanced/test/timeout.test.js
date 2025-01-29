const assert = require('assert')

describe.skip('Timeout Demonstration', function(){
    this.timeout(5000)
    it('should pass within the default timout', (done)=>{
        setTimeout(()=>{
            assert.strictEqual(5+5, 10)
            done()
        }, 1000)
    })

    it('should fail if it execeeds the suite timeout', (done)=>{
        setTimeout(()=>{
            assert.strictEqual(5+5, 10)
            done()
        }, 6000)
    })

    it('should pass with an extended timeout', function(done){
        this.timeout(7000)
        setTimeout(()=>{
            assert.strictEqual(5+5, 10)
            done()
        }, 6000)
    })
})