import { CreateProductAllData } from "../models/product.models";

export const getProductDataDTO = (dto: CreateProductAllData) => {
  const { images, ...productObj } = dto;
  return { productObj, images };
};
