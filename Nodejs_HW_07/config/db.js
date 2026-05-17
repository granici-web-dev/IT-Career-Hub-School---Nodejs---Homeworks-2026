import { Sequelize } from "sequelize";
import db_config from "./config";
import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV || "development";
const config = db_config[env];

const sequilize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  },
);

export default sequilize;
