import chai from "./customAssertions.js";

const {expect} = chai

describe("Custom Assertion Tests", ()=>{
    it("should validate an email format", ()=>{
        expect("test@email.com").to.be.validEmail();
    })

    it("should fail for an invalid email", ()=>{
        expect("invalid-email").to.not.be.validEmail();
    })
})