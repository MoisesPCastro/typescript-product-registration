import { ProdutosRepository } from './../../repository/ProdutosRepository';
import { CustomersRepository } from './../../repository/CustomersRepository';
import { AppError } from '../../errors/AppError';
import { IModelOrders } from '../../model/modelOrders';
import {
  IfindeProducts,
  IOrdersRepository
} from '../../repository/interfaceRepository';
import { IOrdersDomain, IRequestOrderDomain } from '../interfaceDomainData';

export class DomainOrders implements IOrdersDomain {
  constructor(
    private readonly ordersRepository: IOrdersRepository,
    private readonly customersRepository: CustomersRepository,
    private readonly produtosRepository: ProdutosRepository
  ) {}

  async addDomain({
    id_customer,
    products
  }: IRequestOrderDomain): Promise<IModelOrders> {
    const existeCustomer = await this.customersRepository.getIdCustomers(
      id_customer
    );
    if (!existeCustomer)
      throw new AppError('O Customer não existe na base de dados', 404);

    const existeProduto = await this.produtosRepository.getAllIdProducts(
      products
    );

    if (!existeProduto.length)
      throw new AppError('O produto não existe na base de dados', 404);

    const existeProdutoIds = existeProduto.map(item => item.id);

    const checarProdutoInexistent = products.filter(
      product => !existeProdutoIds.includes(product.id)
    );

    if (!checarProdutoInexistent.length)
      throw new AppError('O produto não existe na base de dados', 404);

    const validacaoQuantidade = products.filter(
      product =>
        existeProduto.filter(item => item.id === product.id)[0].quantity <
        product.quantity
    );

    if (!validacaoQuantidade.length)
      throw new AppError('O produto não existe na base de dados', 404);

    return; //await this.ordersRepository.addOrders();
  }

  async indexDomain(id: number): Promise<IModelOrders> {
    const existOrdersId = await this.ordersRepository.getIdOrders(id);
    if (!existOrdersId)
      throw new AppError(
        'A orders do serviço não existe na base de dados',
        404
      );

    return existOrdersId;
  }
}
