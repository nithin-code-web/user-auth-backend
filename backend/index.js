const express = require('express');
const db = require('./db');
const app = express();


app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Backend is running!");
});

app.post('/register', async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
      return res.json({ message: "Please fill all fields" });
    }

    if (password !== confirmPassword) {
      return res.json({ message: "Passwords do not match" });
    }

    const [rows] = await db.promise().query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      return res.json({ message: "Email already registered" });
    }

    await db.promise().query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password]
    );

    return res.json({ message: "Registration successful" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "Please fill all fields" });
    }

    // Find user by email
    const [rows] = await db.promise().query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.json({ message: "User not found" });
    }

    const user = rows[0];

    // Check password (plain text for now)
    if (user.password !== password) {
      return res.json({ message: "Incorrect password" });
    }

    return res.json({ message: "Login successful" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
