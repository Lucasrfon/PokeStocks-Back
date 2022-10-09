import { Router } from "express";
import validateToken from "../middlewares/validateToken";

const actionsRouter = Router();

actionsRouter.use(validateToken());
actionsRouter.get("/jobs");
actionsRouter.post("/jobs");

export default actionsRouter;
