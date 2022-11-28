import { AppError } from '../../errors/AppError';
import { IModelProducts } from '../../model/modelProducts';
import {
  IHttpRequestProducts,
  IProdutoRepository
} from '../../repository/interfaceRepository';
import { IproductsDomain } from '../interfaceDomainData';

export class DomainProducts implements IproductsDomain {
  constructor(private readonly repositoryProducts: IProdutoRepository) {
    this.repositoryProducts = repositoryProducts;
  }

  async indexDomain(id: number): Promise<IModelProducts> {
    const existProdutoId = await this.repositoryProducts.getIdProducts(id);
    if (!existProdutoId)
      throw new AppError('Produto não existe na base de dados', 404);

    return existProdutoId;
  }

  async searchDomain(): Promise<IModelProducts[]> {
    return await this.repositoryProducts.searchProducts();
  }

  async addDomain(value: IHttpRequestProducts): Promise<IModelProducts> {
    const existCadastro = await this.repositoryProducts.getNameProducts(
      value.name
    );

    if (existCadastro) {
      throw new AppError('Nome do produto existente na base de dados', 409);
    }

    return await this.repositoryProducts.addProducts(value);
  }

  async updateDomein(
    values: IHttpRequestProducts,
    id: number
  ): Promise<IModelProducts> {
    const existProdutoId = await this.repositoryProducts.getIdProducts(id);
    if (!existProdutoId)
      throw new AppError('Produto não existe na base de dados', 404);

    const existProdutoName = await this.repositoryProducts.getNameProducts(
      values.name
    );

    if (existProdutoName && existProdutoName.id !== id)
      throw new AppError('Nome do produto existente na base de dados', 409);

    return await this.repositoryProducts.updateProducts(values, id);
  }

  async deletarDomain(id: number): Promise<IModelProducts> {
    const existProdutoId = await this.repositoryProducts.getIdProducts(id);

    if (!existProdutoId)
      throw new AppError('Produto não existe na base de dados', 404);

    return await this.repositoryProducts.deleteProducts(id);
  }
}
