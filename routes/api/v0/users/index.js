import express from "express";
import {
  addNewAdminUserController,
  addNewSellerUserController,
  checkUserAuthController,
  updateUserMobileNoController,
  updateUserPasswordController,
} from "./user-controller";

const user = express.Router();

user.post("/add-new-user", addNewSellerUserController);
user.post("/update-user-password", updateUserPasswordController);
user.post("/update-user-mobile-no", updateUserMobileNoController);
user.post("/add-new-admin", addNewAdminUserController);
user.post("/auth", checkUserAuthController);

export default user;
