import { Prisma } from "@prisma/client";

export type UserObj = Prisma.UserGetPayload<{}>;
export type CreateUserObj = Omit<UserObj, "id">;
export type UpdateUserObj = Omit<CreateUserObj, "email">;

// export type UserObj = {
//   id: string;
//   name: string;
// };
