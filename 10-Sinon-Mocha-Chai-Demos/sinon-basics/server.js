// server.js
import express from "express";
import { userController } from "./src/userController.js";

const app = express();
app.use(express.json());

app.get("/users/:id", userController.getUser);
app.post("/users", userController.createUser);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
