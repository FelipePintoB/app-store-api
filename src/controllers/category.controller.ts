import { NextFunction, Request, Response } from "express";
import {
  createCategoryService,
  deleteCategoryService,
  getCategoryService,
  getListCategoriesService,
  updateCategoryService,
} from "../services/categoryDb.services";

export class CategoryController {
  async getListedCategories(req: Request, resp: Response, next: NextFunction) {
    try {
      const categories = await getListCategoriesService();
      resp.json(categories);
    } catch (error) {
      next(error);
    }
  }

  async getCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = await getCategoryService(id);
      resp.json(category);
    } catch (error) {
      next(error);
    }
  }

  async createCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const category = await createCategoryService(req.body);
      resp.json(category);
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await getCategoryService(id);
      const category = await updateCategoryService(id, req.body);
      resp.json(category);
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await getCategoryService(id);
      const category = await deleteCategoryService(id);
      resp.json(category);
    } catch (error) {
      next(error);
    }
  }
}
