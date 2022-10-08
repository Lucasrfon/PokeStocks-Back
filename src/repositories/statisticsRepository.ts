import prisma from "../dbStrategy/prisma";

export async function findAlbum(userId: number) {
  return await prisma.wallet.findMany({
    where: { userId },
  });
}
