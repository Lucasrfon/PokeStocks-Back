import { Router } from "express";
import { applyForJob, requestJobs } from "../controllers/actionsController";
import validateToken from "../middlewares/validateToken";

const actionsRouter = Router();

actionsRouter.use(validateToken());
actionsRouter.get("/jobs", requestJobs);
actionsRouter.post("/jobs", applyForJob);

export default actionsRouter;
