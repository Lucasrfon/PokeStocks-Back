import prisma from "../dbStrategy/prisma";

export async function getStockMarket(email: string) {
  return await prisma.market.findMany();
}

export async function getUserWallet(id: number) {
  return await prisma.wallet.findMany();
}