import { PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { CreateProductObj, UpdateProductObj } from "../models/product.models";
import {
  CreateProductImageObj,
  UpdateProductImageObj,
} from "../models/productImage.models";
import { getProductService } from "./produtDb.services";

const prisma = new PrismaClient();

export const getListProductImageService = async () => {
  try {
    const listProducts = await prisma.productImages.findMany();
    return listProducts;
  } catch (error) {
    throw error;
  }
};

export const getProductImageService = async (productImageId: string) => {
  try {
    const user = await prisma.productImages.findFirst({
      where: {
        id: productImageId,
      },
      include: { product: true },
    });
    if (!user) throw boom.notFound("Product image not found");
    return user;
  } catch (error) {
    throw error;
  }
};

export const createProductImageService = async (
  createDTO: CreateProductImageObj,
) => {
  try {
    await getProductService(createDTO.productId);
    const newProduct = await prisma.productImages.create({
      data: { ...createDTO },
    });
    return newProduct;
  } catch (error) {
    throw error;
  }
};

export const updateProductImageService = async (
  productImageId: string,
  updateDTO: UpdateProductImageObj,
) => {
  try {
    await getProductImageService(productImageId);
    const updatedProduct = await prisma.productImages.update({
      data: { ...updateDTO },
      where: {
        id: productImageId,
      },
    });
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

export const deleteProductImageService = async (productImageId: string) => {
  try {
    await getProductImageService(productImageId);
    const deletedProduct = await prisma.productImages.delete({
      where: {
        id: productImageId,
      },
    });
    return deletedProduct;
  } catch (error) {
    throw error;
  }
};
