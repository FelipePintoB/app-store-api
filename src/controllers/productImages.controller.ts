import { NextFunction, Request, Response } from "express";
import {
  getListProductImageService,
  getProductImageService,
  createProductImageService,
  updateProductImageService,
  deleteProductImageService,
} from "../services/produtImageDb.services";
import { CreateProductImageObj } from "../models/productImage.models";
import { getProductService } from "../services/produtDb.services";

export class ProductImagesControllers {
  async getListedProductImages(
    req: Request,
    resp: Response,
    next: NextFunction,
  ) {
    try {
      const products = await getListProductImageService();
      resp.json(products);
    } catch (error) {
      next(error);
    }
  }

  async getProductImage(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await getProductImageService(id);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }

  async createProductImage(req: Request, resp: Response, next: NextFunction) {
    try {
      const createDto = req.body as CreateProductImageObj;
      await getProductService(createDto.productId);
      const product = await createProductImageService(createDto);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }

  async updateProductImage(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await getProductImageService(id);
      const product = await updateProductImageService(id, req.body);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }

  async deleteProductImage(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await getProductImageService(id);
      const product = await deleteProductImageService(id);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }
}
