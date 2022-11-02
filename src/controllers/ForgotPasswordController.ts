import { Request, Response } from 'express';
import module from '../domainData';
interface IForgotPasswordController {
  create(req: Request, res: Response): Promise<Response>;
}

class ForgotPasswordController implements IForgotPasswordController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    await module.userToken.execute(email);
    return res.status(204).json();
  }
}

export default new ForgotPasswordController();
