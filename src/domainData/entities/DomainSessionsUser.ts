import { UserRepository } from './../../repository/usersRepository';
import { ITokenUser } from '../interfaceDomainData';
import { AppError } from '../../errors/AppError';
import { Bcrypt } from '../../utils/bcrypt';
import { IModelUsers } from '../../model/modelUsers';
import TokenJwt from '../../utils/jwt';

interface IDomainSessionsUser {
  execute(email: string, password: string): Promise<ITokenUser>;
}

export class DomainSessionsUser implements IDomainSessionsUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcrypt: Bcrypt
  ) {}
  async execute(email: string, password: string): Promise<ITokenUser> {
    const user: IModelUsers = await this.userRepository.getEmailUser(email);
    if (!user) throw new AppError('Usuário não existe na base de dados', 404);

    const passwordConfirmed = await this.bcrypt.decrypt(
      password,
      user.password
    );

    if (!passwordConfirmed) throw new AppError('Usuário sem permissão', 401);

    const token = await TokenJwt.create(user.id);
    return { email: user.email, token };
  }
}
