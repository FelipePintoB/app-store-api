import joi from "joi";
import { CreateProductObj, UpdateProductObj } from "../models/productModels";

const id = joi.string().alphanum();
const name = joi.string().min(3).max(20);
const description = joi.string();
const price = joi.number().min(1);
const categoryId = joi.number();

export const getProductSchema = joi.object({
  id: id.required(),
});

export const createProductSchema = joi.object<CreateProductObj>({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  categoryId: categoryId.required(),
});

export const updateProductSchema = joi.object<UpdateProductObj>({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  categoryId: categoryId.required(),
});
