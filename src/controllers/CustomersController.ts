import { Request, Response } from 'express';
import module from '../domainData';

interface ICustomerController {
  addCustomer(req: Request, res: Response): Promise<Response>;
  seachCustomer(req: Request, res: Response): Promise<Response>;
  indexCustomer(req: Request, res: Response): Promise<Response>;
  updateCustomer(req: Request, res: Response): Promise<Response>;
}

class CustomersController implements ICustomerController {
  async addCustomer(req: Request, res: Response): Promise<Response> {
    const response = await module.customers.addDomain(req.body);
    return res.status(201).json(response);
  }

  async indexCustomer(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.customers.indexDomain(Number(id));
    return res.status(200).json(response);
  }

  async seachCustomer(_req: Request, res: Response): Promise<Response> {
    const response = await module.customers.searchDomain();
    return res.json(response);
  }

  async updateCustomer(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.customers.updateDomein(req.body, Number(id));
    return res.status(200).json(response);
  }

  async deletCustomer(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.customers.deletarDomain(Number(id));
    return res.json(response);
  }
}

export default new CustomersController();
