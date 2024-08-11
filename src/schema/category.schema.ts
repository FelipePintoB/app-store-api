import joi from "joi";
import {
  CreateCategoryObj,
  UpdateCategoryObj,
} from "../models/category.models";

const id = joi.string();
const name = joi.string();

export const getCategorySchema = joi.object({
  id: id.required(),
});

export const createCategorySchema = joi.object<CreateCategoryObj>({
  name: name.required(),
});

export const updateCategorySchema = joi.object<UpdateCategoryObj>({
  name,
});
