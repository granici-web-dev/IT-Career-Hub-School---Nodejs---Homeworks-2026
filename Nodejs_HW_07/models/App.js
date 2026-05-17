import { DataTypes } from "sequelize";
import sequilize from "../config/db.js";

const App = sequilize.define(
  "App",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "app",
    timestamps: false,
  },
);

export default App;
