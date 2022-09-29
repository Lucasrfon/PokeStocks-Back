import {Router} from "express";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import { loginSchema, newUserSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post('/signup', validateSchema(newUserSchema));
authRouter.post('/login', validateSchema(loginSchema));

export default authRouter;