import { NextFunction, Request, response, Response } from "express";
import {
  createUserService,
  getListUserService,
  getUserService,
  updateUserService,
} from "../services/userDb.services";

export class UserController {
  async getListedUsers(req: Request, resp: Response, next: NextFunction) {
    try {
      const users = await getListUserService();
      resp.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUser(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await getUserService(id);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, resp: Response, next: NextFunction) {
    try {
      const user = await createUserService(req.body);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await updateUserService(id, req.body);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await updateUserService(id, req.body);
      resp.json(user);
    } catch (error) {
      next(error);
    }
  }
}
