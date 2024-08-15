import { Prisma } from "@prisma/client";

export type OrderObj = Prisma.OrderGetPayload<{}>;
export type CreateOrderObj = Omit<OrderObj, "id">;
export type UpdateOrderObj = { status: string };
