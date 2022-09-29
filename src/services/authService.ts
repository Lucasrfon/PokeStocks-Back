import bcrypt from 'bcrypt';
import { findUserByEmail, insertUser, TCreateUser } from '../repositories/authRepository';

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