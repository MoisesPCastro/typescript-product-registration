import express from 'express';
import 'express-async-errors';
import routes from './routes';
import { errors } from 'celebrate';
import { middewareError } from './errors/middewares';
import uploadConfig from './config/upload';
import 'reflect-metadata';
const app = express();

app.use(errors());
app.use(express.json());
app.use(routes);
app.use(middewareError);
app.use('/files', express.static(uploadConfig.directory));

export { app };
