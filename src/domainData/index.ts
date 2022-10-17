import { UserRepository } from '../repository/usersRepository';
import { Bcrypt } from '../utils/bcrypt';
import { ProdutosRepository } from './../repository/ProdutosRepository';
import { DomainProducts } from './entities/DomainProducts';
import { DomainUser } from './entities/DomainUsers';
import { DomainSessionsUser } from './entities/DomainSessionsUser';

const productsRepository = new ProdutosRepository();
const usersRepository = new UserRepository();
const bcrypt = new Bcrypt();

const module = {
  products: new DomainProducts(productsRepository),
  users: new DomainUser(usersRepository, bcrypt),
  sessionUsers: new DomainSessionsUser(usersRepository, bcrypt)
};

export default module;
