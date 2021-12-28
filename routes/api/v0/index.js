import express from "express";
import addvertistment from "./addvertistment";
import usertype from "./userType";
import categories from "./categories";
import user from "./users";

const router = express.Router();

router.use("/addvertistment", addvertistment);
router.use("/user-type", usertype);
router.use("/categories", categories);
router.use("/user", user);

export default router;
