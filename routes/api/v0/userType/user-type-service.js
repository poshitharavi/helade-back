import { Sequelize } from "sequelize";
import UserType from "./../../../../models/userType";

export const addUserTypes = async (data) => {
  return await UserType.create({
    userTypeId: data.id,
    userTypeName: data.name,
  });
};

export const getAllUserTypes = async () => {
  return await UserType.findAll();
};
