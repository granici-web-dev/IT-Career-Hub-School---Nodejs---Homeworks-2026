import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authenticateJWT from "./middleware/auth.js";
import authorizedRole from "./middleware/authorizedRole.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const users = [
  {
    id: 1,
    username: "Alice",
    email: "alice@gmail.com",
    password: await bcrypt.hash("password123", 10),
    role: "user",
  },
  {
    id: 2,
    username: "Bob",
    email: "bob@gmail.com",
    password: await bcrypt.hash("password456", 10),
    role: "admin",
  },
];

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" },
  );
  res.json({ token });
});

app.put("/update-email", authenticateJWT, (req, res) => {
  const { newEmail } = req.body;
  const user = users.find((u) => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.email = newEmail;
  res.json({ message: "Email updated successfully", user });
});

app.delete("/delete-account", authenticateJWT, (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.user.id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  res.json({ message: "Account deleted successfully" });
});

app.put(
  "/update-role",
  authenticateJWT,
  authorizedRole("admin"),
  (req, res) => {
    const { id, newRole } = req.body;
    const user = users.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = newRole;
    res.json({ message: "Role updated successfully", user });
  },
);

app.get("/refresh-token", authenticateJWT, (req, res) => {
  const user = req.user;
  const newToken = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" },
  );
  res.json({ token: newToken });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
