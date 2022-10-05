import {Router} from "express";

const marketRouter = Router();

marketRouter.get('/market');
marketRouter.post('/market/buy');
marketRouter.post('/market/sell');

export default marketRouter;