import Addvertistment from "./../../../../models/addvertistment";
import { Op } from "sequelize";

export const addNewAddvertisment = async (data) => {
  return await Addvertistment.create({
    addedUserId: data.addedUserId,
    categoryId: data.categoryId,
    imageOneUrl: data.url1,
    imageTwoUrl: data.url2,
    imageThreeUrl: data.url3,
    imageFourUrl: data.url4,
    imageFiveUrl: data.url5,
    imageSixUrl: data.url6,
    discription: data.discription,
    city: data.city,
    district: data.district,
    price: data.price,
    productName: data.productName,
  });
};

export const getAllAddvertisments = async () => {
  return await Addvertistment.findAll();
};

export const getAllApprovedAddvertisments = async (size, page) => {
  return await Addvertistment.findAndCountAll({
    limit: size,
    offset: page * size,
    where: { approved: true },
    order: [["createdAt", "DESC"]],
  });
};

export const getAllApprovedAddvertismentsByCategory = async (
  size,
  page,
  catId
) => {
  return await Addvertistment.findAndCountAll({
    limit: size,
    offset: page * size,
    where: { approved: true, categoryId: catId },
    order: [["createdAt", "DESC"]],
  });
};

export const getResultOfSearch = async (
  district,
  category,
  keyword,
  size,
  page
) => {
  let whereClause = {};

  if (district) {
    whereClause = { ...whereClause, district: district };
  }

  if (category) {
    whereClause = { ...whereClause, categoryId: category };
  }

  if (keyword) {
    whereClause = {
      ...whereClause,
      productName: {
        [Op.substring]: keyword,
      },
    };
  }

  return await Addvertistment.findAndCountAll({
    limit: size,
    offset: page * size,
    where: whereClause,
    order: [["createdAt", "DESC"]],
  });
};

export const getAllUnApprovedAddvertisments = async () => {
  return await Addvertistment.findAll({
    where: { approved: null },
    order: [["createdAt", "DESC"]],
  });
};

export const getAddvertismentDetails = async (id) => {
  return await Addvertistment.findOne({ where: { addId: id } });
};

export const getAddvertismentsByUserId = async (id) => {
  return await Addvertistment.findAll({ where: { addedUserId: id } });
};

export const updateApprovedStatusOfAdd = async (id, data) => {
  const updateStatus = await Addvertistment.update(
    {
      approved: data.state,
    },
    {
      where: {
        addId: id,
      },
    }
  );

  if (updateStatus[0] === 1)
    return await Addvertistment.findOne({ where: { addId: id } });

  throw new Error("Addvertistment is not found");
};
