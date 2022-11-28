import knex from '../config/database';
import { IModelProducts } from '../model/modelProducts';
import {
  IfindeProducts,
  IHttpRequestProducts,
  IProdutoRepository
} from './interfaceRepository';

export class ProdutosRepository implements IProdutoRepository {
  async addProducts(value: IHttpRequestProducts): Promise<IModelProducts> {
    return await knex('products').insert(value);
  }

  async searchProducts(): Promise<IModelProducts[]> {
    return await knex('products').select('*');
  }

  async getNameProducts(name: string): Promise<IModelProducts> {
    return await knex('products').select('*').where({ name }).first();
  }

  async getIdProducts(id: number): Promise<IModelProducts> {
    return await knex('products').select('*').where({ id }).first();
  }
  async getAllIdProducts(
    productsId: IfindeProducts[]
  ): Promise<IModelProducts[]> {
    const arrayidProducts = productsId.map(item => item.id);
    return await knex('products').select('*').whereIn('id', arrayidProducts);
  }

  async updateProducts(
    values: IHttpRequestProducts,
    id: number
  ): Promise<IModelProducts> {
    return await knex('products').where({ id }).update({
      name: values.name,
      price: values.price,
      quantity: values.quantity
    });
  }

  async deleteProducts(id: number): Promise<IModelProducts> {
    return await knex('products').where({ id }).del();
  }
}
