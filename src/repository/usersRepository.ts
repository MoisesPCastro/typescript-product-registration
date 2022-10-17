import Knex from '../config/database';
import { IModelUsers } from '../model/modelUsers';
import { IUserRepository, IHttpRequestUser } from './interfaceRepository';

export class UserRepository implements IUserRepository {
  async addUser(value: IHttpRequestUser): Promise<IModelUsers> {
    return await Knex('users').insert(value);
  }

  async searchUser(): Promise<IModelUsers[]> {
    return await Knex('users').select('*');
  }

  async getNameUser(name: string): Promise<IModelUsers> {
    return await Knex('users').select('*').where({ name }).first();
  }

  async getIdUser(id: number): Promise<IModelUsers> {
    return await Knex('users').select('*').where({ id }).first();
  }

  async getEmailUser(email: string): Promise<IModelUsers> {
    return await Knex('users').select('*').where({ email }).first();
  }

  async getAllEmailUser(email: string): Promise<IModelUsers[]> {
    return await Knex('users')
      .select(['email', 'id'])
      .whereILike('email', `%${email}%`);
  }

  async updateUser(values: IHttpRequestUser, id: number): Promise<IModelUsers> {
    return await Knex('users').where({ id }).update({
      name: values.name,
      email: values.email,
      password: values.password
    });
  }

  async deleteUser(id: number): Promise<IModelUsers> {
    return await Knex('users').where({ id }).del();
  }
}
