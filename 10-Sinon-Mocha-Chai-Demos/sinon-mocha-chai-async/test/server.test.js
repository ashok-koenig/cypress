import * as chaiModule from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import app from '../server.js'
import userService from '../userService.js'

const chai = chaiModule.use(chaiHttp)
const {expect} = chai;

describe('API Tests - Mocking with Sinon', ()=>{
    afterEach(()=>{
        sinon.restore()
    })

    // Mocking the getUsers function in API call
    it("should retur mocked users", async ()=>{
        const fakeUsers = [{id: 99, name: "Mock user", email: "mock@email.com"}]
        sinon.stub(userService, "getUsers").resolves(fakeUsers)

        const res = await chai.request.execute(app).get("/users")
        expect(res).to.have.status(200)
        expect(res.body).to.deep.equal(fakeUsers)
    })

    // Mocking createUser in API Call
    it('should mock createUser function', async ()=>{
        const newUser = {id: 3, name: "Mocked", email: "mocked@email.com"}
        sinon.stub(userService, "createUser").resolves(newUser)

        const res = await chai.request.execute(app).post("/users").send({name: "Mocked", email: "mocked@email.com"})
        expect(res).to.have.status(201)
        expect(res.body).to.deep.equal(newUser)
    })
})