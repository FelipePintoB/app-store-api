import { Prisma } from "@prisma/client";

export type CategoryObj = Prisma.CategoryGetPayload<{}>;
export type CreateCategoryObj = Omit<CategoryObj, "id">;
export type UpdateCategoryObj = CreateCategoryObj;

// export type UserObj = {
//   id: string;
//   name: string;
// };
