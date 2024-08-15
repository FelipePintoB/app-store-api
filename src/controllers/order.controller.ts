import { NextFunction, Request, Response } from "express";
import {
  createOrderService,
  deleteOrderService,
  getListOrdersService,
  getOrderService,
  updateOrderService,
} from "../services/orderDb.services";

export class OrderController {
  async getListedOrders(req: Request, resp: Response, next: NextFunction) {
    try {
      const orders = await getListOrdersService();
      resp.json(orders);
    } catch (error) {
      next(error);
    }
  }

  async getOrder(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const order = await getOrderService(id);
      resp.json(order);
    } catch (error) {
      next(error);
    }
  }

  async createOrder(req: Request, resp: Response, next: NextFunction) {
    try {
      const order = await createOrderService(req.body);
      resp.json(order);
    } catch (error) {
      next(error);
    }
  }

  async updateOrder(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await getOrderService(id);
      const order = await updateOrderService(id, req.body);
      resp.json(order);
    } catch (error) {
      next(error);
    }
  }

  async deleteOrder(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await getOrderService(id);
      const order = await deleteOrderService(id);
      resp.json(order);
    } catch (error) {
      next(error);
    }
  }
}
