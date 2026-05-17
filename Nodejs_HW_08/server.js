import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import Book from "./models/Book.js";

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, this is home page");
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).send("Error fetching books");
  }
});

app.post("/books", async (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).send("Title, author and year are required");
  }

  try {
    const newBook = await Book.create({ title, author, year });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).send("Failed to create a book");
  }
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;

  try {
    const [updatedRows] = await Book.update(
      { title, author, year },
      { where: { id } },
    );

    if (updatedRows > 0) {
      res.json({ message: "Book updated successfully" });
    } else {
      res.status(404).send("Book not found");
    }
  } catch (error) {
    res.status(500).send("Error updating book");
  }
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Book.destroy({ where: { id } });

    if (deleted) {
      res.send("The book was deleted");
    } else {
      res.status(404).send("Book not found");
    }
  } catch (error) {
    res.status(500).send("Error deleting book");
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database estabilished successfully!");
    console.log(`Server is running at http://${HOST}:${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
});
