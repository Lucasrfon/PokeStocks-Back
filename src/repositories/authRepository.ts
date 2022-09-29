import prisma from "../dbStrategy/prisma";

export async function findUserByEmail(email: string) {
    return await prisma.users.findFirst({where: { email }});
}