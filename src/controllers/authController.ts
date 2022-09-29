import { Request, Response } from "express";
import { createUser } from "../services/authService";

export async function signup(req: Request, res: Response) {
    const user = req.body;

    await createUser(user);

    res.status(201).send('Usuário cadastrado!')
}