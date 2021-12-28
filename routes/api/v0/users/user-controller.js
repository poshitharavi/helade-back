import to from "await-to-js";
import bcrypt from "bcryptjs";
import {
  addNewAdminUser,
  addNewSellerUser,
  getUserDetailsByEmail,
} from "./user-service";

export const addNewSellerUserController = async (req, res) => {
  const { body } = req;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(body.password, salt);

  body.password = hash;

  const [err, user] = await to(addNewSellerUser(body));

  if (!err) {
    user.password = null;
    return res.json(user);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const addNewAdminUserController = async (req, res) => {
  const { body } = req;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(body.password, salt);

  body.password = hash;

  const [err, user] = await to(addNewAdminUser(body));

  if (!err) {
    user.password = null;
    return res.json(user);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const checkUserAuthController = async (req, res) => {
  const { body } = req;

  const [err, userDetails] = await to(getUserDetailsByEmail(body.email));

  if (!err) {
    if (userDetails) {
      if (!bcrypt.compareSync(body.password, userDetails.password)) {
        return res.json({
          status: 3,
          error: "user authorization failed",
        });
      }

      userDetails.password = null;

      return res.json(userDetails);
    } else {
      return res.json({
        status: 3,
        error: "user not found",
      });
    }
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};
