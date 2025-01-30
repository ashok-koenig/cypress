import * as chaiModule from 'chai'
import chaiHttp from 'chai-http'
import app from '../app.js'

const chai = chaiModule.use(chaiHttp)
const {expect, request} = chai

describe("Async/Await with HTTP REST API", ()=>{
    it('should return user data for valid user ID', async function(){
        const res = await request.execute(app).get('/user/1')
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('id').equal(1)
        expect(res.body).to.have.property('name').equal("John Doe")
    })

    it("should return error for invalide user ID", async function(){
        const res = await request.execute(app).get("/user/99")
        expect(res.status).to.equal(404)
        expect(res.body).to.have.property('error').equal('User not found')
    })

    it("should handle promise rejection with async/await", async function(){
        try{
            await request.execute(app).get('/user/99')
        }catch(err){
            expect(err.response.status).to.equal(404)
            expect(err.response.body).to.have.property('error').equal('User not found')
        }
    })
})