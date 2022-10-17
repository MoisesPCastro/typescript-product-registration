import { IModelProducts } from '../model/modelProducts';
import { IModelUsers } from '../model/modelUsers';

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
