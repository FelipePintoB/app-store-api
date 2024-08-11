import { PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import {
  CreateCategoryObj,
  UpdateCategoryObj,
} from "../models/category.models";

const prisma = new PrismaClient();

export const getListCategoryService = async () => {
  try {
    const listCategorys = await prisma.category.findMany();
    return listCategorys;
  } catch (error) {
    throw error;
  }
};

export const getCategoryService = async (categoryId: string) => {
  try {
    const user = await prisma.category.findFirst({
      where: {
        id: categoryId,
      },
    });
    if (!user) throw boom.notFound("Category not found");
    return user;
  } catch (error) {
    throw error;
  }
};

export const createCategoryService = async (createDTO: CreateCategoryObj) => {
  try {
    const newCategory = await prisma.category.create({
      data: { ...createDTO },
    });
    return newCategory;
  } catch (error) {
    throw error;
  }
};

export const updateCategoryService = async (
  categoryId: string,
  updateDTO: UpdateCategoryObj,
) => {
  try {
    const updatedCategory = await prisma.category.update({
      data: { ...updateDTO },
      where: {
        id: categoryId,
      },
    });
    return updatedCategory;
  } catch (error) {
    throw error;
  }
};

export const deleteCategoryService = async (categoryId: string) => {
  try {
    const deletedCategory = await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
    return deletedCategory;
  } catch (error) {
    throw error;
  }
};
