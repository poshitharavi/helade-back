import express from "express";
import { get } from "express/lib/response";
import {
  addNewAddvertismentController,
  getAddvertismentDetailsController,
  getAddvertismentsByUserIdController,
  getAllAddvertismentsController,
  getAllUnApprovedAddvertismentsController,
  getApprovedAddvertismentsWithFilterController,
  getResultOfSearchController,
  updateApprovedStatusOfAddController,
  uploadImagesOneByOneController,
} from "./add-controller";

const addvertistment = express.Router();

addvertistment.get("/get-all", getAllAddvertismentsController);
addvertistment.get(
  "/get-all-unapproved",
  getAllUnApprovedAddvertismentsController
);
addvertistment.post("/add-new", addNewAddvertismentController);
addvertistment.post("/add-image", uploadImagesOneByOneController);
addvertistment.get(
  "/get-add-list",
  getApprovedAddvertismentsWithFilterController
);
addvertistment.get("/get-item-details/:id", getAddvertismentDetailsController);
addvertistment.get(
  "/get-user-adds/:userId",
  getAddvertismentsByUserIdController
);
addvertistment.put(
  "/update-approve-state/:id",
  updateApprovedStatusOfAddController
);
addvertistment.post("/search-adds", getResultOfSearchController);

export default addvertistment;
