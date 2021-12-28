import express from "express";
import {
  addNewAdminUserController,
  addNewSellerUserController,
  checkUserAuthController,
} from "./user-controller";

const user = express.Router();

user.post("/add-new-user", addNewSellerUserController);
user.post("/add-new-admin", addNewAdminUserController);
user.post("/auth", checkUserAuthController);

export default user;
