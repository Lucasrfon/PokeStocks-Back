import { User } from "@prisma/client";
import prisma from "../dbStrategy/prisma";

export type TCreateUser = Omit<User, "id" | "credit">;
export type TUser = Omit<User, "id" | "name" | "credit">;

export async function findUserByEmail(email: string) {
  return await prisma.user.findFirst({ where: { email } });
}

export async function insertUser(user: TCreateUser) {
  await prisma.user.create({ data: user });
}
