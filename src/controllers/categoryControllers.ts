import { NextFunction, Request, Response } from "express";
import {
  createCategoryService,
  deleteCategoryService,
  getCategoryService,
  getListCategoryService,
  updateCategoryService,
} from "../services/categoryDb.services";

export class CategoryController {
  async getListedCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const users = await getListCategoryService();
      resp.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await getCategoryService(id);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async createCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const user = await createCategoryService(req.body);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await updateCategoryService(id, req.body);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await deleteCategoryService(id);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }
}
