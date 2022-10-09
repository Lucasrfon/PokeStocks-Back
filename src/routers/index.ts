import { Router } from "express";
import actionsRouter from "./actionsRouter";
import authRouter from "./authRouter";
import marketRouter from "./marketRouter";
import statisticsRouter from "./statisticsRouter";

const router = Router();

router.use(authRouter);
router.use(marketRouter);
router.use(statisticsRouter);
router.use(actionsRouter);

export default router;
