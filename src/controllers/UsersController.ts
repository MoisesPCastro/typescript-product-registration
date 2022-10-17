import { Request, Response } from 'express';
import module from '../domainData';

interface IUserController {
  addUser(req: Request, res: Response): Promise<Response>;
  seachUser(req: Request, res: Response): Promise<Response>;
  indexUser(req: Request, res: Response): Promise<Response>;
  updateUser(req: Request, res: Response): Promise<Response>;
}

class UserController implements IUserController {
  async addUser(req: Request, res: Response): Promise<Response> {
    const response = await module.users.addDomain(req.body);
    return res.status(201).json(response);
  }

  async indexUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.users.indexDomain(Number(id));
    return res.status(200).json(response);
  }

  async seachUser(_req: Request, res: Response): Promise<Response> {
    const response = await module.users.searchDomain();
    return res.json(response);
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.users.updateDomein(req.body, Number(id));
    return res.status(200).json(response);
  }

  async deletUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.users.deletarDomain(Number(id));
    return res.json(response);
  }
}

export default new UserController();
