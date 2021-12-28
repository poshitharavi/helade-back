import { Sequelize } from "sequelize";
import db from "../config/database";

const Users = db.define(
  "users",
  {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shortName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mobileNo: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isNumeric: {
          args: true,
          msg: "Please enter a number code as Telephone Number",
        },
        len: {
          args: [10, 10],
          msg: "maximum length is 10 for Telephone Number",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userType: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userRating: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Users;
