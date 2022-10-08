import { middewareError } from './errors/middewares';
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import routes from './routes';
const app = express();

app.use(express.json());
app.use(routes);
app.use(middewareError);

export { app };
