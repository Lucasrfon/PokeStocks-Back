import { Router } from "express";
import validateToken from "../middlewares/validateToken";

const statisticsRouter = Router();

statisticsRouter.use(validateToken());
statisticsRouter.get("/profile");
statisticsRouter.get("/album");

export default statisticsRouter;
