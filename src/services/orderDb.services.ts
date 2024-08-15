import { PrismaClient } from "@prisma/client";
import boom from "@hapi/boom";
import { CreateOrderObj, UpdateOrderObj } from "../models/order.models";

const prisma = new PrismaClient();

export const getListOrdersService = async () => {
  try {
    const listCategorys = await prisma.order.findMany({
      include: {
        OrderItems: true,
      },
    });
    return listCategorys;
  } catch (error) {
    throw error;
  }
};

export const getOrderService = async (orderId: string) => {
  try {
    const user = await prisma.order.findFirst({
      where: {
        id: orderId,
      },
      include: {
        OrderItems: {
          include: {
            product: true,
          },
        },
      },
    });
    if (!user) throw boom.notFound("Order not found");
    return user;
  } catch (error) {
    throw error;
  }
};

export const createOrderService = async (createDTO: CreateOrderObj) => {
  try {
    const newCategory = await prisma.order.create({
      data: { ...createDTO },
    });
    return newCategory;
  } catch (error) {
    throw error;
  }
};

export const updateOrderService = async (
  orderId: string,
  updateDTO: UpdateOrderObj,
) => {
  try {
    const updatedCategory = await prisma.order.update({
      data: { ...updateDTO },
      where: {
        id: orderId,
      },
    });
    return updatedCategory;
  } catch (error) {
    throw error;
  }
};

export const deleteOrderService = async (orderId: string) => {
  try {
    const deletedCategory = await prisma.order.delete({
      where: {
        id: orderId,
      },
    });
    return deletedCategory;
  } catch (error) {
    throw error;
  }
};
