// server.js
import express from "express";
import bodyParser from "body-parser";
import userService from "./userService.js";

const app = express();
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  const newUser = await userService.createUser(name, email);
  res.status(201).json(newUser);
});

// Start server
if (import.meta.url === `file://${process.argv[1]}`) {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

export default app;
