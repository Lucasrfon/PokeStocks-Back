import express from 'express';
import cors from 'cors';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandlerMiddleware);

export default app