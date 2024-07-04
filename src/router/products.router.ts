import express from "express";

export const productsRouter = express.Router();

productsRouter.post("/", (req, resp) => {
  const { body } = req;
  resp.status(201).json(body);
});

productsRouter.get("/", (req, resp) => {
  resp.json([
    {
      product: 1,
    },
    {
      product: 2,
    },
  ]);
});

productsRouter.patch("/:id", (req, resp) => {
  const { body, params } = req;
  const { id } = params;
  resp.json({
    id,
    data: body,
  });
});

productsRouter.get("/:id", (req, resp) => {
  const { id } = req.params;
  if (id === "0") {
    resp.status(404).json({
      message: id + " not found",
    });
  } else {
    resp.status(200).json({
      product: id,
    });
  }
});

productsRouter.delete("/:id", (req, resp) => {
  const { id } = req.params;
  resp.json({
    id,
    message: "deleted",
  });
});
