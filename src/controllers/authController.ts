import { Request, Response } from "express";
import { TCreateUser, TUser } from "../repositories/authRepository";
import { checkLogin, createUser } from "../services/authService";

export async function signup(req: Request, res: Response) {
  const { email, password, name }: TCreateUser = req.body;

  await createUser({ email, password, name });

  res.status(201).send("Usuário cadastrado!");
}

export async function login(req: Request, res: Response) {
  const user: TUser = req.body;

  const token = await checkLogin(user);

  res.status(200).send(token);
}
