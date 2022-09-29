import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserByEmail, insertUser, TCreateUser } from '../repositories/authRepository';
dotenv.config();

export async function createUser(user: TCreateUser) {
    await isUniqueEmail(user.email);
    user.password = bcrypt.hashSync(user.password, 5);
    await insertUser(user);
}

export async function isUniqueEmail(email: string) {
    const user = await findUserByEmail(email)

    if(user) {
        throw { type: "conflict", message: 'Email já cadastrado' };
    }
}

export function generateToken(id: number) {
    const secret = process.env.TOKEN_SECRET_KEY;

    if(!secret) {
        throw { type: "code", message: '.env não implementado' }
    }

    const expiresIn = process.env.EXPIRES_IN;
    const token = jwt.sign({ id }, secret, { expiresIn });

    return token
}