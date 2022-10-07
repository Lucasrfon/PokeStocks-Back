import prisma from "../dbStrategy/prisma";
import { Market } from "@prisma/client";

export type TMarket = Omit<Market, "value">;

export async function getStockMarket() {
  return await prisma.market.findMany();
}

export async function getUserWallet(id: number) {
  return await prisma.wallet.findMany();
}
