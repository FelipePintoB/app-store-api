import { Prisma } from "@prisma/client";

export type ProductImageObj = Prisma.ProductImagesGetPayload<{}>;
export type CreateProductImageObj = Omit<
  ProductImageObj,
  "id" | "createdAt" | "updatedAt"
>;
export type UpdateProductImageObj = CreateProductImageObj;
