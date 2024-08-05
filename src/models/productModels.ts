import { Prisma } from "@prisma/client";

export type ProductObj = Prisma.ProductGetPayload<{}>;
export type CreateProductObj = Omit<ProductObj, "id">;
export type UpdateProductObj = CreateProductObj;

// export type UserObj = {
//   id: string;
//   name: string;
// };
