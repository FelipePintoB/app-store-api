import joi from "joi";
import boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

type JoiSchema = joi.ObjectSchema<any> | joi.ArraySchema<any>; // eslint-disable-line
type PropType = "body" | "query" | "params";

export const validatorHandler = (schema: JoiSchema, property: PropType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[`${property}`];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
};
