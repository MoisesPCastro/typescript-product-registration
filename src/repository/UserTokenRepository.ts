import knex from '../config/database';
import { IModelUserToken } from './../model/modelUserToken';
import { IUserToken } from './interfaceRepository';
import { v4 as uuidv4 } from 'uuid';

export class UserTokenRepository implements IUserToken {
  public async getUserToken(token: string): Promise<IModelUserToken> {
    return await knex('user_tokens').select().where({ token }).first();
  }

  public async generateToken(user_id: number): Promise<string> {
    const token = uuidv4();
    await knex('user_tokens').insert({ token: token, user_id: user_id });
    return token;
  }
}
