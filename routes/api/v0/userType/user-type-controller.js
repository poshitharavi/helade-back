import to from "await-to-js";
import { addUserTypes, getAllUserTypes } from "./user-type-service";

export const addUserTypesController = async (req, res) => {
  let error = null;
  let savedData = [];
  let breakException = {};
  const types = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Seller" },
  ];

  try {
    types.forEach(async (data) => {
      const [err, userTypes] = await to(addUserTypes(data));
      if (!err) {
        savedData.push(userTypes);
      } else {
        error = err;
        throw breakException;
      }
    });
  } catch (e) {
    if (e !== breakException) throw e;
  }

  if (!error) {
    return res.json(types);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const getAllUserTypesController = async (req, res) => {
  const [err, types] = await to(getAllUserTypes());

  if (!err) {
    return res.json(types);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};
