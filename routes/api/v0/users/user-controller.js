import to from "await-to-js";
import bcrypt from "bcryptjs";
import {
  addNewAdminUser,
  addNewSellerUser,
  getUserDetailsByEmail,
  updateUserMobileNo,
  updateUserPassword,
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
          error: "User password is incorrect",
        });
      }

      userDetails.password = null;

      return res.json(userDetails);
    } else {
      return res.json({
        status: 3,
        error: "User not found",
      });
    }
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const updateUserPasswordController = async (req, res) => {
  const { body } = req;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);

    const [errUserDetails, userDetails] = await to(
      getUserDetailsByEmail(body.email)
    );

    if (errUserDetails) {
      throw new Error(errUserDetails.message);
    }
    if (!bcrypt.compareSync(body.oldPassword, userDetails.password)) {
      throw new Error("Current password is incorrect");
    }

    const [err, user] = await to(updateUserPassword(hash, body.email));
    if (err) {
      throw new Error(err.message);
    }
    return res.json({ message: "Successfully updated the password" });
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
    });
  }
};

export const updateUserMobileNoController = async (req, res) => {
  const { body } = req;

  try {
    const [err, user] = await to(updateUserMobileNo(body.mobileNo, body.email));
    if (err) {
      throw new Error(err.message);
    }

    return res.json({ message: "Successfully updated the mobile no" });
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
    });
  }
};
