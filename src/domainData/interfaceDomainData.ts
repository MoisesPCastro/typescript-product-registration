import { IModelCustomers } from '../model/modelICustomers';
import { IModelOrders } from '../model/modelOrders';
import { IModelProducts } from '../model/modelProducts';
import { IModelUsers } from '../model/modelUsers';
import { IModelUserToken } from '../model/modelUserToken';
import {
  IHttpRequestCustomer,
  IHttpRequestProducts,
  IHttpRequestUser,
  IRequestOrder
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

interface IProduct {
  id: number;
  quantity: number;
}

export interface IRequestOrderDomain {
  id_customer: number;
  products: IProduct[];
}

export interface IOrdersDomain {
  indexDomain(id: number): Promise<IModelOrders>;
  addDomain({
    id_customer,
    products
  }: IRequestOrderDomain): Promise<IModelOrders>;
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
