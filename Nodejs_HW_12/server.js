import express from "express";
import { connectToDatabase, getDB } from "./db/config.js";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://127.0.0.1:${port}`);
    });
  })
  .catch((err) => {
    console.error(
      "Failed to start server due to MongoDB connection issue",
      err,
    );
  });

app.post("/products", async (req, res) => {
  try {
    const db = getDB();
    const product = req.body;
    const result = await db.collection("products").insertOne(product);
    res.status(201).json({ message: "Product created", id: result.insertedId });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const db = getDB();
    const products = await db.collection("products").find().toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const db = getDB();
    const productId = req.params.id;
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const db = getDB();
    const productId = req.params.id;
    const updatedProduct = req.body;
    const result = await db
      .collection("products")
      .updateOne({ _id: new ObjectId(productId) }, { $set: updatedProduct });
    if (result.matchedCount > 0) {
      res.status(200).json({ message: "Product updated" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const db = getDB();
    const productId = req.params.id;
    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(productId) });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
