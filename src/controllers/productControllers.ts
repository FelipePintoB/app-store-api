import { NextFunction, Request, Response } from "express";
import {
  createProductService,
  deleteProductService,
  getListProductService,
  getProductService,
  updateProductService,
} from "../services/produtDb.services";

export class ProductController {
  async getListedProducts(req: Request, resp: Response, next: NextFunction) {
    try {
      const users = await getListProductService();
      resp.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getProduct(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await getProductService(id);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req: Request, resp: Response, next: NextFunction) {
    try {
      const user = await createProductService(req.body);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await updateProductService(id, req.body);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await deleteProductService(id);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }
}
