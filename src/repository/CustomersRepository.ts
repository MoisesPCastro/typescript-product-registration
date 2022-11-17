import Knex from '../config/database';
import { IModelCustomers } from '../model/modelICustomers';
import {
  IHttpRequestCustomer,
  ICustomerRepository
} from './interfaceRepository';

export class CustomersRepository implements ICustomerRepository {
  async addCustomers(value: IHttpRequestCustomer): Promise<void> {
    return await Knex('customers').insert(value);
  }

  async searchCustomers(): Promise<IModelCustomers[]> {
    return await Knex('customers').select('*');
  }

  async getNameCustomers(name: string): Promise<IModelCustomers> {
    return await Knex('customers').select('*').where({ name }).first();
  }

  async getIdCustomers(id: number): Promise<IModelCustomers> {
    return await Knex('customers').select('*').where({ id }).first();
  }

  async getEmailCustomers(email: string): Promise<IModelCustomers> {
    return await Knex('customers').select('*').where({ email }).first();
  }

  async getAllEmailCustomers(email: string): Promise<IModelCustomers[]> {
    return await Knex('customers')
      .select(['email', 'id'])
      .whereILike('email', `%${email}%`);
  }

  async updateCustomers(
    values: IHttpRequestCustomer,
    id: number
  ): Promise<IModelCustomers> {
    return await Knex('customers').where({ id }).update({
      name: values.name,
      email: values.email
    });
  }

  async deleteCustomers(id: number): Promise<IModelCustomers> {
    return await Knex('customers').where({ id }).del();
  }
}
