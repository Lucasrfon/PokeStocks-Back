import { Router } from "express";
import { requestBuyStocks, requestMarket, requestSellStocks } from "../controllers/marketController";
import validateToken from "../middlewares/validateToken";

const marketRouter = Router();

marketRouter.use(validateToken());
marketRouter.get("/market", requestMarket);
marketRouter.post("/market/buy", requestBuyStocks);
marketRouter.post("/market/sell", requestSellStocks);

export default marketRouter;
