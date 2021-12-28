import { Sequelize } from "sequelize";
import db from "../config/database";

const Addvertistment = db.define(
  "addvertistment",
  {
    addId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    addedUserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    imageOneUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageTwoUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageThreeUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageFourUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageFiveUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageSixUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    discription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    district: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    productName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    approved: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    sold: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    addRating: {
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

module.exports = Addvertistment;
