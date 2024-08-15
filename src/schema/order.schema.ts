import joi from "joi";
import { CreateOrderObj, UpdateOrderObj } from "../models/order.models";

const id = joi.string();
const userId = joi.string();
const status = joi.string();

export const getOrderSchema = joi.object({
  id: id.required(),
});

export const createOrderSchema = joi.object<CreateOrderObj>({
  userId: userId.required(),
  status: status.required(),
});

export const updateOrderSchema = joi.object<UpdateOrderObj>({
  status: status.required(),
});
