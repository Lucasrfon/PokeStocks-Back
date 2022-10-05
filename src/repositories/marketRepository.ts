import prisma from "../dbStrategy/prisma";

export async function getStockMarket(email: string) {
  return await prisma.market.findMany();
}