// src/productRepository.js
export const productRepository = {
    products: [],
  
    getAllProducts: () => {
      return productRepository.products;
    },
  
    getProductById: (id) => {
      return productRepository.products.find((p) => p.id === id) || null;
    },
  
    addProduct: (product) => {
      productRepository.products.push(product);
      return product;
    },
  
    updateProduct: (id, updatedProduct) => {
      const index = productRepository.products.findIndex((p) => p.id === id);
      if (index !== -1) {
        productRepository.products[index] = { ...productRepository.products[index], ...updatedProduct };
        return productRepository.products[index];
      }
      return null;
    },
  
    deleteProduct: (id) => {
      const index = productRepository.products.findIndex((p) => p.id === id);
      if (index !== -1) {
        return productRepository.products.splice(index, 1)[0];
      }
      return null;
    }
  };
  