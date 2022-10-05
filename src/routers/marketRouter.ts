import { Router } from "express";
import validateToken from "../middlewares/validateToken";

const marketRouter = Router();

marketRouter.use(validateToken());
marketRouter.get("/market");
marketRouter.post("/market/buy");
marketRouter.post("/market/sell");

export default marketRouter;
