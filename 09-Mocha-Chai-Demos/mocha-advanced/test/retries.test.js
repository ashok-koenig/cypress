const assert = require('assert')

let attempt = 0;

describe('Retries Demonstration', function(){

    // this.retries(2)
    it('should pass on the third attempt', function(){
        this.retries(2)
        attempt ++;
        console.log(`Attempt ${attempt}`)
        assert.strictEqual(attempt, 3)
    })
})