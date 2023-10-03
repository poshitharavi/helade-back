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

export const updateUserPassword = async (password, email) => {
  return await User.update({ password: password }, { where: { email: email } });
};

export const updateUserMobileNo = async (mobileNo, email) => {
  return await User.update({ mobileNo: mobileNo }, { where: { email: email } });
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

export const getUserDetailsByUserId = async (id) => {
  return await User.findOne({ where: { userId: id } });
};
