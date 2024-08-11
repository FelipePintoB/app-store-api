import { Application, Router } from "express";
import { productsRouter } from "./products.router";
import { usersRouter } from "./users.router";
import { categoriesRouter } from "./categories.router";
import { productImagesRouter } from "./productsImages.router";

export function routerApi(app: Application) {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/product-images", productImagesRouter);
  router.use("/users", usersRouter);
  router.use("/categories", categoriesRouter);
}
