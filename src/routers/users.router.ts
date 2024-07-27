import express from "express";
import { createUserService } from "../services/userDb.services";

export const usersRouter = express.Router();

usersRouter.get("/", (req, resp, next) => {
  try {
    resp.json([
      {
        product: 1,
      },
      {
        product: 2,
      },
    ]);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:id", (req, resp, next) => {
  try {
    const { id } = req.params;
    resp.json([
      {
        product: id,
      },
    ]);
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/", async (req, resp, next) => {
  try {
    const { id } = req.body;
    console.log(id)
    const newUser = await createUserService()
    resp.status(201).json([
      {
        ...newUser
      },
    ]);
  } catch (error) {
    next(error);
  }
});
