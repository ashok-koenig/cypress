import * as chai from 'chai'

const {Assertion} = chai

// Custom Assertion: Validate email format
Assertion.addMethod("validEmail", function(){
    const obj = this._obj;
    new Assertion(obj).to.be.a('string')
    this.assert(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj), 
        "expected #{this} to be a valid email",
        "expected #{this} to be a invalid email"
    );
})

export default chai;