import { expect } from "chai";
import Sinon from "sinon";
import { userService } from "../src/userService.js";
import { userRepository } from "../src/userRepository.js";

describe("Sinon - User Service", ()=>{
    afterEach(()=>{
        Sinon.restore()
    })

    it("should spy on getUserById funciton", ()=>{
        const spy = Sinon.spy(userRepository, "getUserById")

        userService.getUser(1)
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(1)).to.be.true;
    })

    it("should stub getUserById function", ()=>{
        const stub = Sinon.stub(userRepository, "getUserById").returns({id:1, name: "Stubbed user"})

        const result = userService.getUser(1);

        expect(result.name).to.equal("Stubbed user")
        expect(stub.calledOnce).to.be.true
    })

    it("should mock getUserById function", ()=>{
        const mock = Sinon.mock(userRepository)
        mock.expects("getUserById").once().returns({id: 2, name: "Mocked user"})

        const result = userService.getUser(2)

        expect(result.name).to.equal("Mocked user")

        mock.verify()
    })
})