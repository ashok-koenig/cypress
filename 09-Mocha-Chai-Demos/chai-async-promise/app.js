// app.js
import express from 'express';
const app = express();

// Sample async function to simulate fetching data
const fetchData = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: 'John Doe' });
      } else {
        reject('User not found');
      }
    }, 1000);
  });
};

// Async route for getting user data
app.get('/user/:id', async (req, res) => {
  try {
    const user = await fetchData(parseInt(req.params.id));
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

// Start server
if (import.meta.url === `file://${process.argv[1]}`) {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  }

export default app;
