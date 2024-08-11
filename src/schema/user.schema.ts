import joi from "joi";
import { CreateUserObj } from "../models/user.models";

const id = joi.string();
const firstName = joi.string();
const lastName = joi.string();
const email = joi.string();

export const getUserSchema = joi.object({
  id: id.required(),
});

export const createUserSchema = joi.object<CreateUserObj>({
  firstName: firstName.required(),
  lastName: lastName.required(),
  email: email.required(),
});

export const updateUserSchema = joi.object({
  firstName,
  lastName,
});
