import { AppError } from './../errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import { ITokenPayload } from './interfaceMiddlewares';

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new AppError('Token não encontrado', 401);
  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodedToken as ITokenPayload;

    req.user = {
      id: String(sub)
    };

    return next();
  } catch (error) {
    throw new AppError('Token invalido', 401);
  }
}
