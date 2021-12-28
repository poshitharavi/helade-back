import express from "express";
import { get } from "express/lib/response";
import {
  addNewAddvertismentController,
  getAllAddvertismentsController,
  getApprovedAddvertismentsWithFilterController,
  updateApprovedStatusOfAddController,
} from "./add-controller";

const addvertistment = express.Router();

addvertistment.get("/get-all", getAllAddvertismentsController);
addvertistment.post("/add-new", addNewAddvertismentController);
addvertistment.post(
  "/get-add-list",
  getApprovedAddvertismentsWithFilterController
);
addvertistment.put(
  "/update-approve-state/:id",
  updateApprovedStatusOfAddController
);

export default addvertistment;
