import { IModelProducts } from '../model/modelProducts';
import { IModelUsers } from '../model/modelUsers';
import {
  IHttpRequestProducts,
  IHttpRequestUser
} from '../repository/interfaceRepository';

export interface IproductsDomain {
  indexDomain(id: number): Promise<IModelProducts>;
  searchDomain(): Promise<IModelProducts[]>;
  addDomain(value: IHttpRequestProducts): Promise<IModelProducts>;
  updateDomein(
    values: IHttpRequestProducts,
    id: number
  ): Promise<IModelProducts>;
  deletarDomain(id: number): Promise<IModelProducts>;
}

export interface IUserDomain {
  addDomain(value: IHttpRequestUser): Promise<IModelUsers>;
}

export interface ITokenUser {
  email: string;
  token: string;
}

export interface IAvatar {
  user_id: number;
  avatarFilename: string;
}
