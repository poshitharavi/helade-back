import to from "await-to-js";
import {
  addNewAddvertisment,
  getAllAddvertisments,
  getAllApprovedAddvertisments,
  updateApprovedStatusOfAdd,
} from "./add-service";

export const addNewAddvertismentController = async (req, res) => {
  const { body } = req;

  const [err, newAdd] = await to(addNewAddvertisment(body));

  if (!err) {
    return res.json(newAdd);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const getAllAddvertismentsController = async (req, res) => {
  const [err, adds] = await to(getAllAddvertisments());

  if (!err) {
    return res.json(adds);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const getApprovedAddvertismentsWithFilterController = async (
  req,
  res
) => {
  const { body } = req;

  if (body.allData) {
    const [err, data] = await to(getAllApprovedAddvertisments());
    if (!err) {
      return res.json(data);
    }

    return res.status(400).json({
      status: 2,
      error: err.message,
    });
  }
};

export const updateApprovedStatusOfAddController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const [err, updatedAdd] = await to(updateApprovedStatusOfAdd(id, body));

  if (!err) {
    return res.json(updatedAdd);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};
