import { findUserById, updateCredits } from "../repositories/authRepository";
import {
  getStockMarket,
  getStockMarketById,
  getUserWallet,
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
  const creditBalance = -totalValue;

  if (user.credit < totalValue) {
    throw { type: "transaction denied", message: "not enough credits" };
  }

  await updateCredits(id, creditBalance);
  await updateWallet(buyOrder, id);
}

export async function sellStocks(sellOrder: TMarket, id: number) {
  const wallet = await getUserWallet(sellOrder.pokemonId, id);

  if (!wallet || wallet.amount < sellOrder.amount) {
    throw { type: "transaction denied", message: "not enough stocks" };
  }
  const pokeMarket = await getStockMarketById(sellOrder.pokemonId);

  if (!pokeMarket) {
    throw { type: "not found" };
  }

  const creditBalance = sellOrder.amount * pokeMarket.value;
  sellOrder.amount = -sellOrder.amount;

  await updateCredits(id, creditBalance);
  await updateWallet(sellOrder, id);
}
