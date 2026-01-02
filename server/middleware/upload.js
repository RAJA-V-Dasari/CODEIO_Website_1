import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

export const teamUpload = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "codeio/team",   // folder for team images
      allowed_formats: ["jpg", "jpeg", "png"]
    }
  })
});

export const eventUpload = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "codeio/events",  // folder for event posters
      allowed_formats: ["jpg", "jpeg", "png"]
    }
  })
});

export const projectUpload = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "codeio/projects", // folder for project screenshots
      allowed_formats: ["jpg", "jpeg", "png"]
    }
  })
});
