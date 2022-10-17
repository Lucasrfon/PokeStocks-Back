import prisma from "../dbStrategy/prisma";
import { getStockMarketById } from "../repositories/marketRepository";

const base = [
  100, 250, 600, 100, 250, 600, 100, 250, 600, 30, 80, 200, 30, 80, 200, 100,
  250, 600, 80, 200, 100, 250, 100, 250, 100, 250, 100, 250, 100, 250, 600, 100,
  250, 600, 100, 250, 100, 250, 100, 250, 100, 250, 100, 250, 600, 100, 250,
  100, 250, 100, 250, 100, 250, 100, 250, 100, 250, 100, 250, 100, 250, 600,
  100, 250, 600, 100, 250, 600, 100, 250, 600, 100, 250, 100, 250, 600, 100,
  250, 100, 250, 100, 250, 250, 100, 250, 100, 250, 100, 250, 100, 250, 100,
  250, 600, 350, 100, 250, 100, 250, 100, 250, 100, 250, 100, 250, 350, 350,
  350, 100, 250, 150, 400, 350, 350, 350, 100, 250, 100, 250, 100, 250, 320,
  350, 350, 350, 350, 350, 350, 30, 600, 700, 0, 100, 350, 350, 350, 350, 500,
  1100, 500, 1100, 700, 700, 1200, 1200, 1200, 350, 800, 2000, 3000, 2500,
];

async function changePrice() {
  for (let i = 0; i < 151; i++) {
    const checkChange = randomize(-1, 1);

    if (checkChange !== 0) {
      const oldPrice = await getStockMarketById(i + 1);
      if (!oldPrice) {
        return;
      }

      const amountChange = randomize(1, 0.05 * base[i]);
      const newPrice = oldPrice.value + checkChange * amountChange;

      if (newPrice > base[i] / 5 && newPrice <= base[i] * 5) {
        await prisma.market.update({
          where: { pokemonId: i + 1 },
          data: { value: newPrice },
        });
      }
    }
  }
}

function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rollMarket() {
  setInterval(changePrice, 5000);
}
