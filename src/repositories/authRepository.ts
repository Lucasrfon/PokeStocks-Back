import { Users } from "@prisma/client";
import prisma from "../dbStrategy/prisma";

export type TCreateUser = Omit<Users, 'id'>;

export async function findUserByEmail(email: string) {
    return await prisma.users.findFirst({where: { email }});
}

export async function insertUser(user: TCreateUser) {
    await prisma.users.create({data: user});
}