import User from "./../../../../models/users";

export const addNewSellerUser = async (data) => {
  return await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    shortName: data.shortName,
    mobileNo: data.mobileNo,
    email: data.email,
    password: data.password,
    userType: 2,
  });
};

export const addNewAdminUser = async (data) => {
  return await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    shortName: data.shortName,
    mobileNo: data.mobileNo,
    email: data.email,
    password: data.password,
    userType: 1,
  });
};

export const getUserDetailsByEmail = async (email) => {
  return await User.findOne({ where: { email: email } });
};
