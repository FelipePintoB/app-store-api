import express from "express";
import { UserController } from "../controllers/userControllers";
import { validatorHandler } from "../midelwares/validator.handler";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} from "../schema/user.schema";

const userController = new UserController();

export const usersRouter = express.Router();

usersRouter.get("/", userController.getListedUsers);

usersRouter.get(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  userController.getUser,
);

usersRouter.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  userController.createUser,
);

usersRouter.put(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  userController.updateUser,
);

usersRouter.delete(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  userController.deleteUser,
);
