import express from "express";

export const categoriesRouter = express.Router();

categoriesRouter.get("/", (req, resp, next) => {
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

categoriesRouter.get("/:id", (req, resp, next) => {
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
