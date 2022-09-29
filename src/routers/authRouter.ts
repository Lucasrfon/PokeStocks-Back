import {Router} from "express";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import newUserSchema from "../schemas/authSchema";

const authRouter = Router();

authRouter.post('/signup', validateSchema(newUserSchema));
authRouter.post('/login');

export default authRouter;