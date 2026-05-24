import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sequelize from "./config/db.js";
import User from "./models/User.js";
import mustChangePassword from "./middleware/mustChangePassword.js";
import authorizedRole from "./middleware/authorizedRole.js";
import authenticateJWT from "./middleware/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, Sequelize with Express!");
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
        mustChangePassword: user.mustChangePassword,
      },
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(409)
        .json({ message: "Username or email already exists" });
    }
    res.status(400).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
        mustChangePassword: user.mustChangePassword,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" },
    );

    res.json({ success: true, data: { token } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/change-password", authenticateJWT, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    user.mustChangePassword = false;
    await user.save();

    res.json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/delete-account", authenticateJWT, async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    await user.destroy();
    res.json({ success: true, message: "Account deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get(
  "/admin",
  authenticateJWT,
  mustChangePassword,
  authorizedRole("admin"),
  (req, res) => {
    res.json({ message: "Welcome, admin!" });
  },
);

app.post(
  "/change-email",
  authenticateJWT,
  mustChangePassword,
  async (req, res) => {
    try {
      const { password, newEmail } = req.body;

      const existingUser = await User.findOne({ where: { email: newEmail } });

      if (existingUser) {
        return res.status(409).json({ message: "Email already in use" });
      }

      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      user.email = newEmail;
      await user.save();

      res.json({ success: true, message: "Email changed successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database established successfully!");
    console.log(`Server running at http://127.0.0.1:${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
