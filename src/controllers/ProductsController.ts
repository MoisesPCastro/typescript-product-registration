import { Request, Response } from 'express';
import module from '../domainData/index';

interface IProductsController {
  addProducts(req: Request, res: Response): Promise<Response>;
  seachProducts(req: Request, res: Response): Promise<Response>;
  indexProducts(req: Request, res: Response): Promise<Response>;
  updateProducts(req: Request, res: Response): Promise<Response>;
}

class ProductsController implements IProductsController {
  async indexProducts(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.products.indexDomain(Number(id));
    return res.status(200).json(response);
  }

  async seachProducts(_req: Request, res: Response): Promise<Response> {
    const response = await module.products.searchDomain();
    return res.json(response);
  }

  async addProducts(req: Request, res: Response): Promise<Response> {
    const response = await module.products.addDomain(req.body);
    return res.status(201).json(response);
  }

  async updateProducts(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.products.updateDomein(req.body, Number(id));
    return res.status(200).json(response);
  }

  async deletProducts(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await module.products.deletarDomain(Number(id));
    return res.json(response);
  }
}

export default new ProductsController();
