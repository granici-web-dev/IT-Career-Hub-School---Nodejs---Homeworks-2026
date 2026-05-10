import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err.stack);
    return;
  }

  console.log("Connected to the database successfully!");
});

const createProductsTable = `
  CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL
  )
`;

connection.query(createProductsTable, (err) => {
  if (err) {
    console.error("Error creating table:", err);
  } else {
    console.log("Table 'products' created successfully");
  }
});

export default connection;
