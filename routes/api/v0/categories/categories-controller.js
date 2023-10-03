import to from "await-to-js";
import { imageUploaderForCat } from "../../../../util/imageUpload";
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

/**
 * Category Adding with image upload
 * @param {*} req
 * @param {*} res
 * @returns
 */
// export const addNewCategoryController = async (req, res) => {
//   const { body } = req;
//   try {
//     const [errImg, imgRes] = await to(imageUploaderForCat(body.img));

//     if (errImg) {
//       throw new Error(errImg.message);
//     }

//     const [err, category] = await to(
//       addNewCategory({ name: body.name, url: imgRes.secure_url })
//     );

//     if (err) {
//       throw new Error(err.message);
//     }
//     return res.json(category);
//   } catch (error) {
//     return res.status(400).json({
//       status: 2,
//       error: error.message,
//     });
//   }
// };

export const addNewCategoryController = async (req, res) => {
  const cates = [
    { name: "Electronics", url: "sample" },
    { name: "Home & Garden", url: "sample" },
    { name: "Animals", url: "sample" },
    { name: "Business & Industry", url: "sample" },
    { name: "Hobby & Sport", url: "sample" },
    { name: "Kinds", url: "sample" },
    { name: "Fashion & Beauty", url: "sample" },
    { name: "Education", url: "sample" },
    { name: "Agriculture", url: "sample" },
    { name: "Hotel Decor", url: "sample" },
    { name: "Religious", url: "sample" },
    { name: "Gifts", url: "sample" },
    { name: "Art & Crafts", url: "sample" },
    { name: "Other", url: "sample" },
  ];
  let resArr = [];
  for (const cat of cates) {
    const [err, data] = await to(addNewCategory(cat));

    resArr.push(data);
  }

  return res.json(resArr);
};
