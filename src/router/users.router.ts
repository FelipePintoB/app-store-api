import express from "express";

export const usersRouter = express.Router();

usersRouter.get("/", (req, resp) => {
  resp.json([
    {
      product: 1,
    },
    {
      product: 2,
    },
  ]);
});

usersRouter.get("/:id", (req, resp) => {
  const { id } = req.params;
  resp.json([
    {
      product: id,
    },
  ]);
});
