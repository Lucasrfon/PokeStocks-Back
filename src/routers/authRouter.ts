import {Router} from "express";
import { signup } from "../controllers/authController";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import { loginSchema, newUserSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post('/signup', validateSchema(newUserSchema), signup);
authRouter.post('/login', validateSchema(loginSchema));

export default authRouter;