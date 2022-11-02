import { AppError } from '../../../errors/AppError';
import { IModelUsers } from '../../../model/modelUsers';
import { IHttpRequestUser } from '../../../repository/interfaceRepository';
import { UserRepository } from '../../../repository/usersRepository';
import { Bcrypt } from '../../../utils/bcrypt';
import { IUserDomain } from '../../interfaceDomainData';

export class DomainUser implements IUserDomain {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcrypt: Bcrypt
  ) {}

  async addDomain(value: IHttpRequestUser): Promise<IModelUsers> {
    const existUser = await this.userRepository.getEmailUser(value.email);
    if (existUser)
      throw new AppError('Usuário já existe na base de dados', 409);

    const hashPassword = await this.bcrypt.encrypt(value.password);

    value.password = hashPassword;

    return await this.userRepository.addUser(value);
  }

  async indexDomain(id: number): Promise<IModelUsers> {
    const existUser = await this.userRepository.getIdUser(id);
    if (!existUser)
      throw new AppError('Usuário não existe na base de dados', 404);

    return await this.userRepository.getIdUser(id);
  }

  async searchDomain(): Promise<IModelUsers[]> {
    return await this.userRepository.searchUser();
  }

  async updateDomein(
    values: IHttpRequestUser,
    id: number
  ): Promise<IModelUsers> {
    const existUser = await this.userRepository.getIdUser(id);
    if (!existUser)
      throw new AppError('Usuário não existe na base de dados', 404);

    const existUserEmail = await this.userRepository.getAllEmailUser(
      values.email
    );

    if (existUserEmail.length && existUserEmail[0].id !== id)
      throw new AppError('Email existente na base de dados', 409);

    return await this.userRepository.updateUser(values, id);
  }

  async deletarDomain(id: number): Promise<IModelUsers> {
    const existUser = await this.userRepository.getIdUser(id);
    if (!existUser)
      throw new AppError('Usuário não existe na base de dados', 404);

    return await this.userRepository.deleteUser(id);
  }
}
