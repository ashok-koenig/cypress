import { expect } from "chai";
import sinon from "sinon";
import { productService } from "../src/productService.js";
import { productRepository } from "../src/productRepository.js";
import mockProducts from "./mockData.json" with {type: "json"}

describe("Product Service tests with external mock data", ()=>{
    afterEach(()=>{
        sinon.restore();
    })

    // Load mock data and stub getAllProducts
    it("should retur mock product list", ()=>{
        const stub = sinon.stub(productRepository, "getAllProducts").returns(mockProducts)

        const restult = productService.getAll();
        expect(restult).to.deep.equal(mockProducts)
        expect(stub.calledOnce).to.be.true
    })

    // Load specific product from mock data
    it("should return a specific mock product", ()=>{
        const stub = sinon.stub(productRepository, "getProductById").callsFake((id)=>{
            return mockProducts.find((p)=> p.id == id) || null
        })

        const result = productService.getById(2)

        expect(result).to.deep.equal(mockProducts[1])
        expect(stub.calledOnce).to.be.true
    })
})