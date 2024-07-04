import express from "express";
import boom from "@hapi/boom";

export const productsRouter = express.Router();

productsRouter.post("/", (req, resp, next) => {
  try {
    const { body } = req;
    resp.status(201).json(body);
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/", (req, resp, next) => {
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

productsRouter.patch("/:id", (req, resp, next) => {
  try {
    const { body, params } = req;
    const { id } = params;
    resp.json({
      id,
      data: body,
    });
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/:id", (req, resp, next) => {
  try {
    const { id } = req.params;
    if (id === "0") {
      throw boom.notFound("Product not found");
    } else {
      resp.status(200).json({
        product: id,
      });
    }
  } catch (error) {
    next(error);
  }
});

productsRouter.delete("/:id", (req, resp, next) => {
  try {
    const { id } = req.params;
    resp.json({
      id,
      message: "deleted",
    });
  } catch (error) {
    next(error);
  }
});
