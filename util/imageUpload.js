import { v2 } from "cloudinary";
require("dotenv").config(); //adding environmental variables

v2.config({
  cloud_name: process.env.CLOUDINARY_USER_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const imageUploader = async (image) => {
  return v2.uploader.upload(image, {
    resourse_type: "image",
    quality: 60,
    height: 600,
    width: 450,
    transformation: [
      {
        overlay: {
          url: "https://res.cloudinary.com/heladelk/image/upload/v1641853335/logo/logo_ytgmiw.png",
        },
        effect: "colorize",
        color: "white",
        opacity: 60,
      },
    ],
    crop: "fill",
    sign_url: true,
    type: "authenticated",
  });
};

export const imageUploaderForCat = async (image) => {
  return v2.uploader.upload(image, {
    resourse_type: "image",
    quality: 60,
    height: 512,
    width: 512,
    sign_url: true,
    type: "authenticated",
  });
};
