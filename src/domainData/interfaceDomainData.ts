import {
  IHttpRequestAdd,
  IHttpResponse
} from '../repository/interfaceRepository';

export interface IproductsDomain {
  indexDomain(id: number): Promise<IHttpResponse>;
  searchDomain(): Promise<IHttpResponse[]>;
  addDomain(value: IHttpRequestAdd): Promise<IHttpResponse>;
  updateDomein(values: IHttpRequestAdd, id: number): Promise<IHttpResponse>;
  deletarDomain(id: number): Promise<IHttpResponse>;
}
