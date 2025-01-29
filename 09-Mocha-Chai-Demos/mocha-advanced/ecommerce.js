const products = [];
const cart = [];

const ecommerceApp = {
  // Product Management
  addProduct: (product) => {
    if (!product.name || !product.price) {
      throw new Error('Product must have a name and price');
    }
    products.push(product);
    return product;
  },
  getProducts: () => products,

  // Cart Management
  addToCart: (product) => {
    cart.push(product);
    return cart;
  },
  removeFromCart: (productName) => {
    const index = cart.findIndex((p) => p.name === productName);
    if (index === -1) {
      throw new Error('Product not found in the cart');
    }
    cart.splice(index, 1);
    return cart;
  },
  getCart: () => cart,
};

module.exports = ecommerceApp;
