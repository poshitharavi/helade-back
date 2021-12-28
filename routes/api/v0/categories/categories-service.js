import Category from "./../../../../models/categories";

export const getAllCategories = async () => {
  return await Category.findAll();
};

export const getCategorydetailsById = async (id) => {
  return await Category.findOne({ where: { categoryId: id } });
};

export const addNewCategory = async (data) => {
  return await Category.create({
    categoryName: data.name,
    categoryUrl: data.url,
  });
};
