import { findUserById, updateCredits } from "../repositories/authRepository";
import {
  getStockMarket,
  getStockMarketById,
  TMarket,
  updateWallet,
} from "../repositories/marketRepository";

export async function getMarketData() {
  return await getStockMarket();
}

export async function buyStocks(buyOrder: TMarket, id: number) {
  const pokeMarket = await getStockMarketById(buyOrder.pokemonId);
  const user = await findUserById(id);

  if (!pokeMarket || !user) {
    throw { type: "not found" };
  }
  const totalValue = buyOrder.amount * pokeMarket.value;
  const newCreditBalance = user.credit - totalValue;

  if (user.credit < totalValue) {
    throw { type: "transaction denied", message: "not enough credits" };
  }

  await updateCredits(id, newCreditBalance);
  await updateWallet(buyOrder, id);
}
