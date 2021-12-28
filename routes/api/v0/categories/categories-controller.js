import to from "await-to-js";
import {
  addNewCategory,
  getAllCategories,
  getCategorydetailsById,
} from "./categories-service";

export const getAllCategoriesController = async (req, res) => {
  const [err, categories] = await to(getAllCategories());

  if (!err) {
    return res.json(categories);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const getCategorydetailsByIdController = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const [err, category] = await to(getCategorydetailsById(id));

  if (!err) res.json(category);

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const addNewCategoryController = async (req, res) => {
  const { body } = req;

  const [err, category] = await to(addNewCategory(body));

  if (!err) {
    return res.json(category);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};
