import express from "express";
import {
  addNewCategoryController,
  getAllCategoriesController,
  getCategorydetailsByIdController,
} from "./categories-controller";

const category = express.Router();

category.get("/get-all", getAllCategoriesController);
category.get("/get-by-id/:id", getCategorydetailsByIdController);
category.post("/add", addNewCategoryController);

export default category;
