import express from "express";
import { validatorHandler } from "../midelwares/validator.handler";
import { ProductImagesControllers } from "../controllers/productImages.controller";
import {
  createProductImageSchema,
  getProductImageSchema,
  updateProductImageSchema,
} from "../schema/productImage.schema";

const productImagesControllers = new ProductImagesControllers();
export const productImagesRouter = express.Router();

productImagesRouter.get("/", productImagesControllers.getListedProductImages);

productImagesRouter.get(
  "/:id",
  validatorHandler(getProductImageSchema, "params"),
  productImagesControllers.getListedProductImages,
);

productImagesRouter.post(
  "/",
  validatorHandler(createProductImageSchema, "body"),
  productImagesControllers.createProductImage,
);

productImagesRouter.put(
  "/:id",
  validatorHandler(getProductImageSchema, "params"),
  validatorHandler(updateProductImageSchema, "body"),
  productImagesControllers.updateProductImage,
);

productImagesRouter.delete(
  "/:id",
  validatorHandler(getProductImageSchema, "params"),
  productImagesControllers.deleteProductImage,
);
