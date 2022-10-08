export interface IHttpResponse {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export interface IHttpRequestAdd {
  name: string;
  price: number;
  quantity: number;
}

export interface IProdutoRepository {
  addProducts(value: IHttpRequestAdd): Promise<IHttpResponse>;
  searchProducts(): Promise<IHttpResponse[]>;
  getNameProducts(name: string): Promise<IHttpResponse>;
  updateProducts(values: IHttpRequestAdd, id: number): Promise<IHttpResponse>;
  getIdProducts(id: number): Promise<IHttpResponse>;
  deleteProducts(id: number): Promise<IHttpResponse>;
}
