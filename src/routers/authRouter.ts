import {Router} from "express";
import { login, signup } from "../controllers/authController";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import { loginSchema, newUserSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post('/signup', validateSchema(newUserSchema), signup);
authRouter.post('/login', validateSchema(loginSchema), login);

export default authRouter;