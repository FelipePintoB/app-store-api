import { NextFunction, Request, Response } from "express";
import {
  createProductService,
  deleteProductService,
  getListProductService,
  getProductService,
  updateProductService,
} from "../services/produtDb.services";
import { CreateProductAllData } from "../models/product.models";
import { getProductDataDTO } from "../utils/product.functions";
import { createProductImageService } from "../services/produtImageDb.services";
import { CreateProductImageObj } from "../models/productImage.models";

export class ProductController {
  async getListedProducts(req: Request, resp: Response, next: NextFunction) {
    try {
      const products = await getListProductService();
      resp.json(products);
    } catch (error) {
      next(error);
    }
  }

  async getProduct(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await getProductService(id);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req: Request, resp: Response, next: NextFunction) {
    try {
      const productAllData = req.body as CreateProductAllData;
      const { productObj, images } = getProductDataDTO(productAllData);
      const product = await createProductService(productObj);
      if (images) {
        for (let i = 0; i < images.length; i++) {
          const createDTO: CreateProductImageObj = {
            productId: product.id,
            imageUrl: images[i],
          };
          await createProductImageService(createDTO);
        }
      }
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await getProductService(id);
      const product = await updateProductService(id, req.body);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await getProductService(id);
      const product = await deleteProductService(id);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }
}
