import { NextFunction, Request, Response } from 'express';
import { AppError } from './AppError';

export const middewareError = (
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  } catch (error) {
    next(error);
  }
};
