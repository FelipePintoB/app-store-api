import express from "express";

export const categoriesRouter = express.Router();

categoriesRouter.get("/", (req, resp) => {
  resp.json([
    {
      product: 1,
    },
    {
      product: 2,
    },
  ]);
});

categoriesRouter.get("/:id", (req, resp) => {
  const { id } = req.params;
  resp.json([
    {
      product: id,
    },
  ]);
});
