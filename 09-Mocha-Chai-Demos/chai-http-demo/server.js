import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// GET /users - Fetch all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// POST /users - Add a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// POST /login - Mock authentication
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@example.com" && password === "password123") {
    return res.status(200).json({ message: "Login successful", token: "mockToken123" });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

// Start server
if (import.meta.url === `file://${process.argv[1]}`) {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

export default app;
