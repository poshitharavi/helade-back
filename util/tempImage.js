import base64Img from "base64-img";

export const baseConvertAndSaveInTemp = async (
  base64String,
  userId,
  valReturnFn
) => {
  base64Img.img(
    base64String,
    "./temp/img",
    userId + Date.now(),
    (err, filepath) => {
      const pathArr = filepath.split("/");
      const fileName = pathArr[pathArr.length - 1];
      valReturnFn(err, fileName);
    }
  );
};
