import joi from "joi";
import { CreateUserObj } from "../models/userModels";
import { CreateCategoryObj, UpdateCategoryObj } from "../models/categoryModels";

const id = joi.string();
const name = joi.string();
const lastName = joi.string();
const email = joi.string();

export const getCategorySchema = joi.object({
  id: id.required(),
});

export const createCategorySchema = joi.object<CreateCategoryObj>({
  name: name.required(),
});

export const updateCategorySchema = joi.object<UpdateCategoryObj>({
  name,
});
