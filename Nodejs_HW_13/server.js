import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const dbURI = process.env.MONGO_URI || "url";
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

startServer();
async function startServer() {
  try {
    await mongoose.connect(dbURI);
    console.log("Successfully connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running at http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
