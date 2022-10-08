import { Router } from "express";
import authRouter from "./authRouter";
import marketRouter from "./marketRouter";
import statisticsRouter from "./statisticsRouter";

const router = Router();

router.use(authRouter);
router.use(marketRouter);
router.use(statisticsRouter);

export default router;
