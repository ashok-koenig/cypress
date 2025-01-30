import * as chaiModule from 'chai'
import chaiHttp from 'chai-http'
import app from '../server.js'

const chai = chaiModule.use(chaiHttp)
const {expect, request} = chai

describe("Users API Tests", ()=>{
    
    // Test GET /users
    it("should fetch all users", async ()=>{
        const res = await request.execute(app).get("/users")
        expect(res).to.have.status(200)
        expect(res.body).to.be.an("array")
        expect(res.body).to.have.lengthOf(2)
    })

    // Test POST /users
    it("should create a new user", async ()=>{
        const newUser = {name: "John", email: "john@example.com"}
        const res = await request.execute(app).post("/users").send(newUser)
        expect(res).to.have.status(201)
        expect(res.body).to.include(newUser)
    })

    // Test POST /users with missing fields
    it("should return 400 for missing name/email", async ()=>{
        const res = await request.execute(app).post("/users").send({name: "John"})
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error', "Name and email are required")
    })

    // Test POST /login - successful authentication
    it("should authenticate and return a token", async ()=>{
        const res = await request.execute(app).post("/login").send({email: "admin@example.com", password: "password123"})
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('message', "Login successful")
        expect(res.body).to.have.property('token')
    })

    // Test POST /login - Invalid credentials
    it("should return 401 for invalid login", async ()=>{
        const res = await request.execute(app).post("/login").send({email: "wrong@example.com", password: "wrongpwd"})
        expect(res).to.have.status(401)
        expect(res.body).to.have.property('error', "Invalid credentials")        
    })
})
