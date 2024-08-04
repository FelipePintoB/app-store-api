import { PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { CreateUserObj, UpdateUserObj } from "../models/userModels";

const prisma = new PrismaClient();

export const getListUserService = async () => {
  try {
    const listUsers = await prisma.user.findMany();
    return listUsers;
  } catch (error) {
    throw error;
  }
};

export const getUserService = async (userId: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) throw boom.notFound("User not found");
    return user;
  } catch (error) {
    throw error;
  }
};

export const createUserService = async (createDTO: CreateUserObj) => {
  try {
    const newUser = await prisma.user.create({ data: { ...createDTO } });
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const updateUserService = async (
  uid: string,
  updateDTO: UpdateUserObj,
) => {
  try {
    const updatedUser = await prisma.user.update({
      data: { ...updateDTO },
      where: {
        id: uid,
      },
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

export const deleteUserService = async (uid: string) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: uid,
      },
    });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};
