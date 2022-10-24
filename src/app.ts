import express from 'express';
import routes from './routes';
import { errors } from 'celebrate';
import { middewareError } from './errors/middewares';
import 'express-async-errors';
import 'reflect-metadata';
const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());
app.use(middewareError);

export { app };
