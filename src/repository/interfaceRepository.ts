import { IModelCustomers } from '../model/modelICustomers';
import { IModelProducts } from '../model/modelProducts';
import { IModelUsers } from '../model/modelUsers';
import { IModelUserToken } from '../model/modelUserToken';

export interface IHttpRequestProducts {
  name: string;
  price: number;
  quantity: number;
}

export interface IProdutoRepository {
  addProducts(value: IHttpRequestProducts): Promise<IModelProducts>;
  searchProducts(): Promise<IModelProducts[]>;
  getNameProducts(name: string): Promise<IModelProducts>;
  updateProducts(
    values: IHttpRequestProducts,
    id: number
  ): Promise<IModelProducts>;
  getIdProducts(id: number): Promise<IModelProducts>;
  deleteProducts(id: number): Promise<IModelProducts>;
}

export interface IHttpRequestUser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface IUserRepository {
  addUser(value: IHttpRequestUser): Promise<IModelUsers>;
  searchUser(): Promise<IModelUsers[]>;
  getNameUser(name: string): Promise<IModelUsers>;
  getIdUser(id: number): Promise<IModelUsers>;
  getEmailUser(email: string): Promise<IModelUsers>;
  getAllEmailUser(email: string): Promise<IModelUsers[]>;
  updateUser(values: IHttpRequestUser, id: number): Promise<IModelUsers>;
  deleteUser(id: number): Promise<IModelUsers>;
}
export interface IHttpRequestCustomer {
  name: string;
  email: string;
}

export interface ICustomerRepository {
  addCustomers(value: IHttpRequestCustomer): Promise<void>;
  searchCustomers(): Promise<IModelCustomers[]>;
  getNameCustomers(name: string): Promise<IModelCustomers>;
  getIdCustomers(id: number): Promise<IModelCustomers>;
  getEmailCustomers(email: string): Promise<IModelCustomers>;
  getAllEmailCustomers(email: string): Promise<IModelCustomers[]>;
  updateCustomers(
    values: IHttpRequestCustomer,
    id: number
  ): Promise<IModelCustomers>;
  deleteCustomers(id: number): Promise<IModelCustomers>;
}

export interface IUserToken {
  getUserToken(token: string): Promise<IModelUserToken>;
  generateToken(user_id: number): Promise<string>;
}
