import { Router } from "express";
import {
  requestBuyStocks,
  requestMarket,
  requestSellStocks,
} from "../controllers/marketController";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import validateToken from "../middlewares/validateToken";
import { marketSchema } from "../schemas/marketSchema";

const marketRouter = Router();

marketRouter.use(validateToken());
marketRouter.get("/market", requestMarket);
marketRouter.post(
  "/market/buy",
  validateSchema(marketSchema),
  requestBuyStocks
);
marketRouter.post(
  "/market/sell",
  validateSchema(marketSchema),
  requestSellStocks
);

export default marketRouter;
