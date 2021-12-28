import { Sequelize } from "sequelize";
import db from "../config/database";

const Categories = db.define(
  "categories",
  {
    categoryId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categoryUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Categories;
