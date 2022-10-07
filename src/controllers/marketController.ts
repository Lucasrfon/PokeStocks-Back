import { Request, Response } from "express";
import { Market } from "@prisma/client";

export async function requestMarket(req: Request, res: Response) {
  const marketData = await getMarketData();

  res.status(200).send(marketData);
}

export async function requestBuyStocks(req: Request, res: Response) {
  const buyOrder: Market = req.body;

  await buyStocks(buyOrder);

  res.status(200).send("Ordem de compra realizada");
}

export async function requestSellStocks(req: Request, res: Response) {
  const sellOrder: Market = req.body;

  await sellStocks(sellOrder);

  res.status(200).send("Ordem de venda realizada");
}
