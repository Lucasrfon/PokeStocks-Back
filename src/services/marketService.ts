import { getStockMarket, getUserWallet, TMarket } from "../repositories/marketRepository";

export async function getMarketData() {
  return await getStockMarket();
}