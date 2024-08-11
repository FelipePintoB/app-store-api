import { PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { CreateProductObj, UpdateProductObj } from "../models/product.models";

const prisma = new PrismaClient();

export const getListProductService = async () => {
  try {
    const listProducts = await prisma.product.findMany({
      include: { category: true },
    });
    return listProducts;
  } catch (error) {
    throw error;
  }
};

export const getProductService = async (productId: string) => {
  try {
    const user = await prisma.product.findFirst({
      where: {
        id: productId,
      },
      include: {
        category: true,
        images: true,
      },
    });
    if (!user) throw boom.notFound("Product not found");
    return user;
  } catch (error) {
    throw error;
  }
};

export const createProductService = async (createDTO: CreateProductObj) => {
  try {
    const newProduct = await prisma.product.create({ data: { ...createDTO } });
    return newProduct;
  } catch (error) {
    throw error;
  }
};

export const updateProductService = async (
  productId: string,
  updateDTO: UpdateProductObj,
) => {
  try {
    const updatedProduct = await prisma.product.update({
      data: { ...updateDTO },
      where: {
        id: productId,
      },
    });
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

export const deleteProductService = async (productId: string) => {
  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    return deletedProduct;
  } catch (error) {
    throw error;
  }
};
