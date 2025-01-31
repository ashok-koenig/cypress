// src/productController.js
import { productService } from "./productService.js";

export const productController = {
  getAll: (req, res) => {
    res.json(productService.getAll());
  },

  getById: (req, res) => {
    const product = productService.getById(parseInt(req.params.id));
    product ? res.json(product) : res.status(404).json({ message: "Product not found" });
  },

  create: (req, res) => {
    const newProduct = productService.create(req.body);
    res.status(201).json(newProduct);
  },

  update: (req, res) => {
    const updatedProduct = productService.update(parseInt(req.params.id), req.body);
    updatedProduct ? res.json(updatedProduct) : res.status(404).json({ message: "Product not found" });
  },

  delete: (req, res) => {
    const deletedProduct = productService.delete(parseInt(req.params.id));
    deletedProduct ? res.json(deletedProduct) : res.status(404).json({ message: "Product not found" });
  }
};
