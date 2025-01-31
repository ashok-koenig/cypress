import * as chai from 'chai'
import sinon from "sinon"
import sinonChai from 'sinon-chai'
import userService from '../userService.js'

chai.use(sinonChai)
const {expect} = chai;

describe("User Service - Sinon tests", ()=>{
    afterEach(()=>{
        sinon.restore();
    })

    // Using a spy to tract funciton calls
    it("should call getUsers function", async ()=>{
        const spy = sinon.spy(userService, "getUsers")
        await userService.getUsers();
        expect(spy).to.have.been.calledOnce
    })

    // Using a stub to control return values
    it("should return fake users using stub", async ()=>{
        const fakeUsers = [{id: 99, name: "Fake", email:"fake@email.com"}]
        const stub = sinon.stub(userService, "getUsers").resolves(fakeUsers)
        const users = await userService.getUsers();
        expect(users).to.deep.equal(fakeUsers)
    })

    // Using a mock to expect function behaviour
    it("should call createUser with correct arguments", async ()=>{
        const mock = sinon.mock(userService)
        mock.expects("createUser").withArgs("John", "john@email.com").once().resolves({id: 3, name:"John", email: "john@email.com"})

        const result = await userService.createUser("John", "john@email.com");
        expect(result).to.include({name: "John", email: "john@email.com"})
        mock.verify()
    })
})