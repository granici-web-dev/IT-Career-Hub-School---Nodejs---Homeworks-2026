import express from "express";
import dotenv from "dotenv";
import connection from "./db/setup.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM products";

  connection.query(query, (err, results) => {
    if (err) {
      console.log("Error getting products");
      res.status(500).send("Error fetching products");
      return;
    }
    res.json(results);
  });
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).send("Name and price are required");
  }

  const query = "INSERT INTO products (name, price) VALUES (?, ?)";

  connection.query(query, [name, price], (err, result) => {
    if (err) {
      console.log("Error: to upload products");
      res.status(500).send("Error post products");
      return;
    }

    res.status(201).json({ id: result.insertId, name, price });
  });
});

app.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("The data was not sent");
  }

  res.send(`Data received: ${name}, ${email}`);
});

app.use("/", (error, req, res, next) => {
  console.error(error.stack);
  res.status(error.status || 404).send({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
