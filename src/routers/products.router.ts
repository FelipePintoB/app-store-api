import express from "express";
import { validatorHandler } from "../midelwares/validator.handler";
import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} from "../schema/product.schema";
import { ProductController } from "../controllers/product.controller";

const productController = new ProductController();
export const productsRouter = express.Router();

productsRouter.get("/", productController.getListedProducts);

productsRouter.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  productController.getProduct,
);

productsRouter.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  productController.createProduct,
);

productsRouter.put(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  productController.updateProduct,
);

productsRouter.delete(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  productController.deleteProduct,
);
