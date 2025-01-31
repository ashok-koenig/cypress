// src/productService.js
import { productRepository } from "./productRepository.js";

export const productService = {
  getAll: () => {
    return productRepository.getAllProducts();
  },

  getById: (id) => {
    return productRepository.getProductById(id);
  },

  create: (product) => {
    return productRepository.addProduct(product);
  },

  update: (id, product) => {
    return productRepository.updateProduct(id, product);
  },

  delete: (id) => {
    return productRepository.deleteProduct(id);
  }
};
