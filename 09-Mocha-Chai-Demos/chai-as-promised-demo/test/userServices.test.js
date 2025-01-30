import * as chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import userService from '../userService.js'

chai.use(chaiAsPromised)

const {expect} = chai

describe("User service tests", ()=>{
    it('should return all users', async ()=>{
        const users = await userService.getUsers();
        expect(users).to.be.an('array')
        expect(users).to.have.lengthOf(2)
    })

    it("should return a user by ID", async ()=>{
        await expect(userService.getUserById(1)).to.eventually.have.property("name", "Alice")
    })

    it("should reject when user ID does not exist", async ()=> {
        await expect(userService.getUserById(10)).to.be.rejectedWith("User not found")
    })

    it("should create a new user", async ()=> {
        const newUser = await userService.createUser("John", "john@example.com")
        expect(newUser).to.include({name: "John", email: "john@example.com"})
    })
})