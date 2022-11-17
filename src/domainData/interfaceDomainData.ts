import { IModelCustomers } from '../model/modelICustomers';
import { IModelProducts } from '../model/modelProducts';
import { IModelUsers } from '../model/modelUsers';
import { IModelUserToken } from '../model/modelUserToken';
import {
  IHttpRequestCustomer,
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
  indexDomain(id: number): Promise<IModelUsers>;
  searchDomain(): Promise<IModelUsers[]>;
  updateDomein(values: IHttpRequestUser, id: number): Promise<IModelUsers>;
  deletarDomain(id: number): Promise<IModelUsers>;
}
export interface ICustomerDomain {
  addDomain(value: IHttpRequestCustomer): Promise<IModelCustomers>;
  indexDomain(id: number): Promise<IModelCustomers>;
  searchDomain(): Promise<IModelCustomers[]>;
  updateDomein(
    values: IHttpRequestCustomer,
    id: number
  ): Promise<IModelCustomers>;
  deletarDomain(id: number): Promise<IModelCustomers>;
}

export interface ITokenUser {
  email: string;
  token: string;
  password?: string;
}

export interface IAvatar {
  user_id: number;
  avatarFilename: string;
}

export interface IDomainSendForgotPassword {
  execute(email: string): Promise<IModelUserToken>;
}
