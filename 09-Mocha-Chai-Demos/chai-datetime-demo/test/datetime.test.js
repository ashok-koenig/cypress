import * as chai from 'chai'
import chaiDateTime from 'chai-datetime'
import userService from '../userService.js'

chai.use(chaiDateTime)

const {expect} = chai

describe("Date Comarisons", ()=>{
    it("should compare two dates", ()=>{
        const date1 = new Date("2025-01-01")
        const date2 = new Date("2025-01-01")

        expect(date1).to.equalDate(date2)
    })
    describe("User Service Tests", ()=>{
        it('should create a user with a valid timestamp', async ()=>{
            const newUser = await userService.createUser("John", "john@example.com")
            expect(newUser.createdAt).to.be.a('date')
            expect(newUser.createdAt).to.be.closeToTime(new Date(), 2)  // within 2 seconds
            const createdYear = newUser.createdAt.getFullYear();
            expect(createdYear).to.be.eq(2025)
        })
    })
})