import { Prisma } from "@prisma/client";

export type OrderItemObj = Prisma.OrderItemsGetPayload<{}>;
export type CreateOrderItemObj = Omit<OrderItemObj, "id">;
export type UpdateOrderItemObj = CreateOrderItemObj;
