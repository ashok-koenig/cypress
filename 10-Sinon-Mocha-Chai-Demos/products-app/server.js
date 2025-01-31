// server.js
import express from "express";
import bodyParser from "body-parser";
import { productController } from "./src/productController.js";

const app = express();
app.use(bodyParser.json());

app.get("/products", productController.getAll);
app.get("/products/:id", productController.getById);
app.post("/products", productController.create);
app.put("/products/:id", productController.update);
app.delete("/products/:id", productController.delete);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
