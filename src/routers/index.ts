import { Router } from "express";
import authRouter from "./authRouter";
import marketRouter from "./marketRouter";

const router = Router();

router.use(authRouter);
router.use(marketRouter);

export default router;
