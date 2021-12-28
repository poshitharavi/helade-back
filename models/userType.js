import { Sequelize } from "sequelize";
import db from "../config/database";

const UserType = db.define(
  "user_type",
  {
    userTypeId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: {
        args: true,
        msg: "User type id is already exisiting",
      },
    },
    userTypeName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = UserType;
