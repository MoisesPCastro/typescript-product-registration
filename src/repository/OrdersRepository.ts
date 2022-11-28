import knex from '../config/database';
import { IModelOrders } from '../model/modelOrders';
import { IOrdersRepository, IRequestOrder } from './interfaceRepository';

export class OrdersRepository implements IOrdersRepository {
  async addOrders(value: IRequestOrder): Promise<IModelOrders> {
    return await knex('orders').insert(value);
  }

  async getIdOrders(id: number): Promise<IModelOrders> {
    return await knex('orders').select('*').where({ id }).first();
  }
}
