import { AppError } from '../../../errors/AppError';
import { UserRepository } from '../../../repository/usersRepository';
import { UserTokenRepository } from '../../../repository/UserTokenRepository';
import EtherealMail from '../../../config/mail/EtherealMail';

interface IDomainSendForgotPassword {
  execute(email: string): Promise<void>;
}
export class DomainSendForgotPassword implements IDomainSendForgotPassword {
  constructor(
    private readonly userTokemRepository: UserTokenRepository,
    private readonly usersRepository: UserRepository
  ) {}
  public async execute(email: string): Promise<void> {
    const user = await this.usersRepository.getEmailUser(email);
    if (!user) throw new AppError('Usuário não existe!', 404);
    await this.userTokemRepository.generateToken(user.id);
    const token = await this.userTokemRepository.generateToken(user.id);

    await EtherealMail.sendMail({
      to: email,
      body: `Solicitação de redefinição de senha recebida: ${token}`
    });
  }
}
