import { isBoom } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

export const logError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  next(err);
};

export const boomErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (isBoom(err)) {
    const { statusCode, payload } = err.output;
    res.status(statusCode).json(payload);
  } else {
    next(err);
  }
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(500).send({ message: err.message, stack: err.stack });
};
