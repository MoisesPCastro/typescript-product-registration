import { AppError } from '../../../errors/AppError';
import { UserRepository } from '../../../repository/usersRepository';
import { UserTokenRepository } from '../../../repository/UserTokenRepository';
import { IModelUserToken } from '../../../model/modelUserToken';
import { addHours, isAfter } from 'date-fns';
import { Bcrypt } from '../../../utils/bcrypt';

interface IDomainResetPassword {
  execute(token: string, password: string): Promise<void>;
}
export class DomainResetPassword implements IDomainResetPassword {
  constructor(
    private readonly userTokemRepository: UserTokenRepository,
    private readonly usersRepository: UserRepository,
    private readonly bcrypt: Bcrypt
  ) {}

  public async execute(token: string, password: string): Promise<void> {
    const userToken: IModelUserToken =
      await this.userTokemRepository.getUserToken(token);
    if (!userToken) throw new AppError('Token do usuário não existe!', 404);

    const user = await this.usersRepository.getIdUser(userToken.user_id);
    if (!user) throw new AppError('Usuário não existe!', 404);

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2);
    if (isAfter(Date.now(), compareDate))
      throw new AppError('Token do usuário não existe!', 401);

    user.password = await this.bcrypt.encrypt(String(password));
    await this.usersRepository.updateUser(user, user.id);
  }
}
