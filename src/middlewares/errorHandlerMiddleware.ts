import { Request, Response, NextFunction } from "express";

export default async function errorHandlerMiddleware(
  error: { type: string; message: string; name: string | undefined },
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "unauthorized" || error.name) {
    return res.status(401).send("Token inválido");
  }

  if (error.type === "authentication") {
    return res.status(401).send("Email ou senha inválidos");
  }

  if (error.type === "type conflict") {
    return res.status(403).send("Tipo incompatível");
  }

  if (error.type === "not found") {
    return res.status(404).send("Não encontrado");
  }

  if (error.type === "transaction denied") {
    return res.status(406).send(error.message);
  }

  if (error.type === "conflict") {
    return res.status(409).send(error.message);
  }

  if (error.type === "schema") {
    return res.status(422).send(error.message);
  }

  if (error.type === "code") {
    return res.status(501).send("Configurações pendentes");
  }

  return res.status(500).send(error);
}
