import { Request, Response } from 'express';
import module from '../domainData';

interface ISessionsUserController {
  getToken(req: Request, res: Response): Promise<Response>;
}

class SessionsUserVontroller implements ISessionsUserController {
  async getToken(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const result = await module.sessionUsers.execute(email, password);
    return res.status(201).json(result);
  }
}

export default new SessionsUserVontroller();
