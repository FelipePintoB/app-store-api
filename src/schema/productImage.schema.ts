import joi from "joi";
import { UpdateProductObj } from "../models/product.models";
import {
  CreateProductImageObj,
  UpdateProductImageObj,
} from "../models/productImage.models";

const id = joi.string();
const imageUrl = joi.string().uri();
const productId = joi.string();

export const getProductImageSchema = joi.object({
  id: id.required(),
});

export const createProductImageSchema = joi.object<CreateProductImageObj>({
  imageUrl: imageUrl.required(),
  productId: productId.required(),
});

export const updateProductImageSchema = joi.object<UpdateProductImageObj>({
  imageUrl: imageUrl.required(),
  productId: productId.required(),
});
