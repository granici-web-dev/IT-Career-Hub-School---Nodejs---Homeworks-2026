import dotenv from "dotenv";
dotenv.config();

const db_config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "mysql",
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "mysql",
  },
};

export default db_config;
