import { ProdutosRepository } from '../repository/ProdutosRepository';
import { ProductsDomain } from './entities';

const productsRepository = new ProdutosRepository();

const module = {
  products: new ProductsDomain(productsRepository)
};

export default module;
