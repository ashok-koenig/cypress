const assert = require('assert')
const ecommerceApp = require('../ecommerce')

describe('E-Commerce App', ()=> {
    // Outer Suite: Testing Prduct Management
    describe('Product management', ()=>{
        beforeEach(()=>{
            // Clear the product list before each test
            ecommerceApp.getProducts().length = 0
        })

        it('should add a product', ()=>{
            const product = {name: 'Laptop', price: 1000};
            const result = ecommerceApp.addProduct(product);
            assert.deepStrictEqual(result, product, "Product wat not added correctly")
        })

        it('should retrieve all products' ,()=>{
            const product1 = {name: 'Laptop', price: 1000};
            const product2 = {name: 'Phone', price: 500};
            ecommerceApp.addProduct(product1)
            ecommerceApp.addProduct(product2)
            const result = ecommerceApp.getProducts()
            assert.deepStrictEqual(result, [product1, product2], 'Products list is incorrect')
        })

        it('should throw an error if product lacks name or price', ()=>{

            assert.throws(
                ()=> ecommerceApp.addProduct({price: 1000}),
                /Product must have a name and price/
            )
        });
    });

    // Nested Suite: testing cart management
    describe('Cart Management', ()=>{
        const product = {name: "Laptop", price: 1000}
        beforeEach(()=>{
            // Clear the cart before each test
            ecommerceApp.getCart().length =0
        })

        it('should add a product to the cart', ()=>{
            ecommerceApp.addToCart(product)
            const result = ecommerceApp.getCart();
            assert.deepStrictEqual(result, [product], 'Product was not added to the cart')
        })

        it('should remove a product from the cart', ()=>{
            ecommerceApp.addToCart(product)
            ecommerceApp.removeFromCart(product.name)
            const result = ecommerceApp.getCart();
            assert.deepStrictEqual(result, [], 'Product was not removed from the cart')
        })
        it('should throw an error if trying to remove a non-existent product', ()=>{
            assert.throws(
                ()=> ecommerceApp.removeFromCart('InvalidName'),
                /Product not found in the cart/
            )
        })
    })
})