import express from "express";
import { CategoryController } from "../controllers/category.controller";
import { validatorHandler } from "../midelwares/validator.handler";
import {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} from "../schema/category.schema";

const categoryController = new CategoryController();

export const categoriesRouter = express.Router();

categoriesRouter.get("/", categoryController.getListedCategory);

categoriesRouter.get(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  categoryController.getCategory,
);

categoriesRouter.post(
  "/",
  validatorHandler(createCategorySchema, "body"),
  categoryController.createCategory,
);

categoriesRouter.put(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  validatorHandler(updateCategorySchema, "body"),
  categoryController.updateCategory,
);

categoriesRouter.delete(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  categoryController.deleteCategory,
);
