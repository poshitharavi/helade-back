import to from "await-to-js";
import { imageUploader } from "../../../../util/imageUpload";
import { getCategorydetailsById } from "../categories/categories-service";
import { getUserDetailsByUserId } from "../users/user-service";

import {
  addNewAddvertisment,
  getAddvertismentDetails,
  getAddvertismentsByUserId,
  getAllAddvertisments,
  getAllApprovedAddvertisments,
  getAllApprovedAddvertismentsByCategory,
  getAllUnApprovedAddvertisments,
  getResultOfSearch,
  updateApprovedStatusOfAdd,
} from "./add-service";

export const addNewAddvertismentController = async (req, res) => {
  const { body } = req;

  try {
    const [err, newAdd] = await to(addNewAddvertisment(body));

    if (err) {
      throw new Error(err.message);
    }

    return res.json(newAdd);
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      status: 2,
      error: err.message,
    });
  }
};

export const uploadImagesOneByOneController = async (req, res) => {
  try {
    const { body } = req;

    const [err, imgRes] = await to(imageUploader(body.image));
    if (err) {
      throw new Error(err.message);
    }
    return res.json({ url: imgRes.secure_url });
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
    });
  }
};

export const getAddvertismentsByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    const [errorAdds, adds] = await to(getAddvertismentsByUserId(userId));
    if (errorAdds) {
      throw new Error(errorAdds.message);
    }

    let finalResult = [];

    for (const add of adds) {
      const [errUser, user] = await to(getUserDetailsByUserId(add.addedUserId));
      const [errCat, cat] = await to(getCategorydetailsById(add.categoryId));

      if (errUser) {
        throw new Error(errUser.message);
      } else if (errCat) {
        throw new Error(errCat.message);
      }

      const data = {
        addId: add.addId,
        categoryId: add.categoryId,
        categoryName: cat.categoryName,
        userId: add.addId,
        userName: user.shortName,
        userContact: user.mobileNo,
        productName: add.productName,
        district: add.district,
        discription: add.discription,
        city: add.city,
        image1: add.imageOneUrl,
        price: add.price,
        approved: add.approved,
        postedOn: add.createdAt,
      };

      finalResult.push(data);
    }

    return res.json(finalResult);
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
    });
  }
};

export const getAddvertismentDetailsController = async (req, res) => {
  try {
    const { id } = req.params;
    const [errorAdds, addDetail] = await to(getAddvertismentDetails(id));

    if (errorAdds) {
      throw new Error(errorAdds.message);
    }

    const [errUser, user] = await to(
      getUserDetailsByUserId(addDetail.addedUserId)
    );
    const [errCat, cat] = await to(
      getCategorydetailsById(addDetail.categoryId)
    );

    if (errUser) {
      throw new Error(errUser.message);
    } else if (errCat) {
      throw new Error(errCat.message);
    }

    const data = {
      addId: addDetail.addId,
      categoryId: addDetail.categoryId,
      categoryName: cat.categoryName,
      userId: addDetail.addId,
      userName: user.shortName,
      userContact: user.mobileNo,
      productName: addDetail.productName,
      district: addDetail.district,
      discription: addDetail.discription,
      city: addDetail.city,
      image1: addDetail.imageOneUrl,
      image2: addDetail.imageTwoUrl,
      image3: addDetail.imageThreeUrl,
      image4: addDetail.imageFourUrl,
      image5: addDetail.imageFiveUrl,
      image6: addDetail.imageSixUrl,
      price: addDetail.price,
      approved: addDetail.approved,
      postedOn: addDetail.createdAt,
    };

    return res.json(data);
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
    });
  }
};

export const getAllAddvertismentsController = async (req, res) => {
  try {
    const [errAds, adds] = await to(getAllAddvertisments());

    if (errAds) {
      throw new Error(errAds.message);
    }

    let finalResult = [];

    for (const add of adds) {
      const [errUser, user] = await to(getUserDetailsByUserId(add.addedUserId));
      const [errCat, cat] = await to(getCategorydetailsById(add.categoryId));

      if (errUser) {
        throw new Error(errUser.message);
      } else if (errCat) {
        throw new Error(errCat.message);
      }

      const data = {
        addId: add.addId,
        categoryId: add.categoryId,
        categoryName: cat.categoryName,
        userId: add.addId,
        userName: user.shortName,
        productName: add.productName,
        district: add.district,
        discription: add.discription,
        city: add.city,
        image1: add.imageOneUrl,
        image2: add.imageTwoUrl,
        price: add.price,
        approved: add.approved,
      };

      finalResult.push(data);
    }

    return res.json(finalResult);
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
    });
  }
};

export const getAllUnApprovedAddvertismentsController = async (req, res) => {
  try {
    const [errAds, adds] = await to(getAllUnApprovedAddvertisments());

    if (errAds) {
      throw new Error(errAds.message);
    }

    let finalResult = [];

    for (const add of adds) {
      const [errUser, user] = await to(getUserDetailsByUserId(add.addedUserId));
      const [errCat, cat] = await to(getCategorydetailsById(add.categoryId));

      if (errUser) {
        throw new Error(errUser.message);
      } else if (errCat) {
        throw new Error(errCat.message);
      }

      const data = {
        addId: add.addId,
        categoryId: add.categoryId,
        categoryName: cat.categoryName,
        userId: add.addId,
        userName: user.shortName,
        productName: add.productName,
        district: add.district,
        discription: add.discription,
        city: add.city,
        image1: add.imageOneUrl,
        image2: add.imageTwoUrl,
        price: add.price,
      };

      finalResult.push(data);
    }

    return res.json(finalResult);
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
    });
  }
};

export const getResultOfSearchController = async (req, res) => {
  const { district, category, keyword } = req.body;
  try {
    if (!district && !category && !keyword) {
      throw new Error("No values entered for searching");
    }

    const pageAsNumber = Number.parseInt(req.body.page);
    const sizeAsNumber = Number.parseInt(req.body.size);

    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }

    let size = 8;
    if (
      !Number.isNaN(sizeAsNumber) &&
      !(sizeAsNumber > 10) &&
      !(sizeAsNumber < 1)
    ) {
      size = sizeAsNumber;
    }

    const [err, adds] = await to(
      getResultOfSearch(district, category, keyword, size, page)
    );

    if (err) {
      throw new Error(err.message);
    }

    let finalResult = [];

    for (const add of adds.rows) {
      const [errUser, user] = await to(getUserDetailsByUserId(add.addedUserId));
      const [errCat, cat] = await to(getCategorydetailsById(add.categoryId));

      if (errUser) {
        throw new Error(errUser.message);
      } else if (errCat) {
        throw new Error(errCat.message);
      }

      const data = {
        addId: add.addId,
        categoryId: add.categoryId,
        categoryName: cat.categoryName,
        userId: add.addId,
        userName: user.shortName,
        productName: add.productName,
        district: add.district,
        discription: add.discription,
        city: add.city,
        image1: add.imageOneUrl,
        image2: add.imageTwoUrl,
        price: add.price,
        approved: add.approved,
        addedDate: add.createdAt,
      };

      finalResult.push(data);
    }

    return res.json({
      content: finalResult,
      totalPages: Math.ceil(adds.count / Number.parseInt(size)),
      currentPage: page + 1,
    });
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
    });
  }
};

export const getApprovedAddvertismentsWithFilterController = async (
  req,
  res
) => {
  const { body } = req;

  const catId = Number.parseInt(req.query.cat);
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  let size = 8;
  if (
    !Number.isNaN(sizeAsNumber) &&
    !(sizeAsNumber > 10) &&
    !(sizeAsNumber < 1)
  ) {
    size = sizeAsNumber;
  }

  try {
    if (Number.isNaN(catId)) {
      throw new Error("Category is missing");
    }
    // if (body.allData) {
    const [err, adds] = await to(
      getAllApprovedAddvertismentsByCategory(size, page, catId)
    );

    if (err) {
      throw new Error(err.message);
    }

    let finalResult = [];

    for (const add of adds.rows) {
      const [errUser, user] = await to(getUserDetailsByUserId(add.addedUserId));
      const [errCat, cat] = await to(getCategorydetailsById(add.categoryId));

      if (errUser) {
        throw new Error(errUser.message);
      } else if (errCat) {
        throw new Error(errCat.message);
      }

      const data = {
        addId: add.addId,
        categoryId: add.categoryId,
        categoryName: cat.categoryName,
        userId: add.addId,
        userName: user.shortName,
        productName: add.productName,
        district: add.district,
        discription: add.discription,
        city: add.city,
        image1: add.imageOneUrl,
        image2: add.imageTwoUrl,
        price: add.price,
        approved: add.approved,
        addedDate: add.createdAt,
      };

      finalResult.push(data);
    }

    return res.json({
      content: finalResult,
      totalPages: Math.ceil(adds.count / Number.parseInt(size)),
      currentPage: page + 1,
    });
    // }
  } catch (error) {
    return res.status(400).json({
      status: 2,
      error: error.message,
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
