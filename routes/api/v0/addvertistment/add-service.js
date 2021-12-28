import Addvertistment from "./../../../../models/addvertistment";

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

export const getAllApprovedAddvertisments = async () => {
  return await Addvertistment.findAll({
    where: { approved: true },
    order: [["createdAt", "DESC"]],
  });
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
