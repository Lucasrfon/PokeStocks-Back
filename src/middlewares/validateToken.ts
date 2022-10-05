import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function validateToken() {
  return (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const secret = process.env.TOKEN_SECRET_KEY;

    if (!token) {
      throw { type: "unauthorized" };
    }

    if (!authorization?.startsWith("Bearer ")) {
      throw { type: "unauthorized" };
    }

    if (!secret) {
      throw { type: "code" };
    }

    jwt.verify(token, secret);
    next();
  };
}
