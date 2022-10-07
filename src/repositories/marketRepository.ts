import prisma from "../dbStrategy/prisma";
import { Market } from "@prisma/client";

export type TMarket = Omit<Market, "value">;

export async function getStockMarket() {
  return await prisma.market.findMany();
}

export async function getStockMarketById(pokemonId: number) {
  return await prisma.market.findUnique({ where: { pokemonId } });
}

export async function getUserWallet(pokemonId: number, userId: number) {
  return await prisma.wallet.findUnique({ where: { pokemonId_userId: { userId, pokemonId } } });
}

export async function updateWallet(order: TMarket, userId: number) {
  await prisma.wallet.upsert({
    where: { pokemonId_userId: { userId, pokemonId: order.pokemonId } },
    create: { userId, pokemonId: order.pokemonId, amount: order.amount },
    update: { amount: { increment: order.amount } },
  });
}
