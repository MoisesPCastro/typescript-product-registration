import { UserTokenRepository } from './../repository/UserTokenRepository';
import { DomainSendForgotPassword } from './entities/userDomain/DomainSendForgotPassword';
import { UserRepository } from '../repository/usersRepository';
import { Bcrypt } from '../utils/bcrypt';
import { ProdutosRepository } from './../repository/ProdutosRepository';
import { DomainProducts } from './entities/DomainProducts';
import { DomainUser } from './entities/userDomain/DomainUsers';
import { DomainSessionsUser } from './entities/userDomain/DomainSessionsUser';
import { DomainUpdateAvatar } from './entities/DomainUpdateAvatar';
import { DomainResetPassword } from './entities/userDomain/DomainResetPassword';

const productsRepository = new ProdutosRepository();
const usersRepository = new UserRepository();
const userTokenRepository = new UserTokenRepository();
const bcrypt = new Bcrypt();

const module = {
  products: new DomainProducts(productsRepository),
  users: new DomainUser(usersRepository, bcrypt),
  sessionUsers: new DomainSessionsUser(usersRepository, bcrypt),
  useAvatar: new DomainUpdateAvatar(usersRepository),
  userToken: new DomainSendForgotPassword(userTokenRepository, usersRepository),
  useResetPassowrd: new DomainResetPassword(
    userTokenRepository,
    usersRepository,
    bcrypt
  )
};

export default module;
