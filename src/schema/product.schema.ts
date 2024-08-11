import joi from "joi";
import {
  CreateProductAllData,
  UpdateProductObj,
} from "../models/product.models";

const id = joi.string();
const name = joi.string().min(3).max(100);
const description = joi.string();
const price = joi.number().min(1);
const categoryId = joi.string();
const imageUrl = joi.string().uri();
const imagesUrl = joi.array().items(imageUrl.required());

export const getProductSchema = joi.object({
  id: id.required(),
});

export const createProductSchema = joi.object<CreateProductAllData>({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  categoryId: categoryId.required(),
  images: imagesUrl,
});

export const updateProductSchema = joi.object<UpdateProductObj>({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  categoryId: categoryId.required(),
});
