import { AppError } from './../../errors/AppError';
import { UserRepository } from './../../repository/usersRepository';
import { IHttpRequestUser } from '../../repository/interfaceRepository';
import { UserTokenRepository } from '../../repository/UserTokenRepository';

interface IDomainSendForgotPassword {
  execute({ email }: IHttpRequestUser): Promise<void>;
}
export class DomainSendForgotPassword implements IDomainSendForgotPassword {
  constructor(
    private readonly userTokemRepository: UserTokenRepository,
    private readonly usersRepository: UserRepository
  ) {}
  public async execute({ email }: IHttpRequestUser): Promise<void> {
    const user = await this.usersRepository.getEmailUser(email);
    if (!user) throw new AppError('Usuário não existe!', 404);
    const token = await this.userTokemRepository.generateToken(user.id);
    console.log('token', token);
  }
}
