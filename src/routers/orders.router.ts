import express from "express";
import { validatorHandler } from "../midelwares/validator.handler";
import {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} from "../schema/category.schema";
import { OrderController } from "../controllers/order.controller";

const orderController = new OrderController();

export const ordersRouter = express.Router();

ordersRouter.get("/", orderController.getListedOrders);

ordersRouter.get(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  orderController.getOrder,
);

ordersRouter.post(
  "/",
  validatorHandler(createCategorySchema, "body"),
  orderController.createOrder,
);

ordersRouter.put(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  validatorHandler(updateCategorySchema, "body"),
  orderController.updateOrder,
);

ordersRouter.delete(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  orderController.deleteOrder,
);
