import joi from "joi";

const id = joi.string().alphanum();
const name = joi.string().min(3).max(20);
const price = joi.number().min(1);

export const getProductSchema = joi.object({
  id: id.required(),
});

export const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
});

export const updateProductSchema = joi.object({
  name: name,
  price: price,
});
