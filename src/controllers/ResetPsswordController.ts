import { Request, Response } from 'express';
import module from '../domainData';
interface IResetPasswordController {
  create(req: Request, res: Response): Promise<Response>;
}

class ResetPasswordController implements IResetPasswordController {
  async create(req: Request, res: Response): Promise<Response> {
    const { password, token } = req.body;
    await module.useResetPassowrd.execute(token, password);
    return res.status(204).json();
  }
}

export default new ResetPasswordController();
