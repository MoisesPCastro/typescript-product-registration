import knex from '../config/database';
import {
  IHttpRequestAdd,
  IHttpResponse,
  IProdutoRepository
} from './interfaceRepository';

export class ProdutosRepository implements IProdutoRepository {
  async addProducts(value: IHttpRequestAdd): Promise<IHttpResponse> {
    return await knex('products').insert(value);
  }

  async searchProducts(): Promise<IHttpResponse[]> {
    return await knex('products').select('*');
  }

  async getNameProducts(name: string): Promise<IHttpResponse> {
    return await knex('products').select('*').where({ name }).first();
  }

  async getIdProducts(id: number): Promise<IHttpResponse> {
    return await knex('products').select('*').where({ id }).first();
  }

  async updateProducts(
    values: IHttpRequestAdd,
    id: number
  ): Promise<IHttpResponse> {
    return await knex('products').where({ id }).update({
      name: values.name,
      price: values.price,
      quantity: values.quantity
    });
  }

  async deleteProducts(id: number): Promise<IHttpResponse> {
    return await knex('products').where({ id }).del();
  }
}
