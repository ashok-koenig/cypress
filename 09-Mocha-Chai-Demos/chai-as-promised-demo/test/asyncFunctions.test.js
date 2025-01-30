import * as chai from "chai"
import chaiAsPromised from "chai-as-promised"
import { fetchData, fetchError } from "../asyncFunctions.js"

// Use chai-as-promised
chai.use(chaiAsPromised)

const {expect} = chai

describe("Async Function Tests", ()=>{
    it("should resolve with correct data", async ()=>{
        await expect(fetchData()).to.eventually.equal("Fetched Data")
    })

    it("should reject with an error", async ()=>{
        await expect(fetchError()).to.be.rejectedWith("Failed to fetch data")
    })
})