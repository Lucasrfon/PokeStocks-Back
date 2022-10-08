import { Router } from "express";
import { requestAlbum, requestProfile } from "../controllers/statisticsController";
import validateToken from "../middlewares/validateToken";

const statisticsRouter = Router();

statisticsRouter.use(validateToken());
statisticsRouter.get("/profile", requestProfile);
statisticsRouter.get("/album", requestAlbum);

export default statisticsRouter;
