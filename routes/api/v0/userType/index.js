import express from "express";
import {
  addUserTypesController,
  getAllUserTypesController,
} from "./user-type-controller";

const usertype = express.Router();

usertype.get("/add", addUserTypesController);
usertype.get("/get-all", getAllUserTypesController);

export default usertype;
