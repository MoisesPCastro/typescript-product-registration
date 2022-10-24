import path from 'path';
import fs from 'fs';
import { UserRepository } from './../../repository/usersRepository';
import { IAvatar } from '../interfaceDomainData';
import { AppError } from '../../errors/AppError';
import { IModelUsers } from '../../model/modelUsers';
import uploadConfig from '../../config/upload';

interface IDomainUpdateAvatar {
  execute({ user_id, avatarFilename }: IAvatar): Promise<IModelUsers>;
}

export class DomainUpdateAvatar implements IDomainUpdateAvatar {
  constructor(private readonly userRepository: UserRepository) {}
  async execute({ user_id, avatarFilename }: IAvatar): Promise<IModelUsers> {
    const user: IModelUsers = await this.userRepository.getIdUser(user_id);
    if (!user) throw new AppError('Usuário não existe na base de dados', 404);

    if (user.avatar) {
      const avatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const avatarFileExists = await fs.promises.stat(avatarFilePath);

      if (avatarFileExists) {
        await fs.promises.unlink(avatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await this.userRepository.updateUser(user, user_id);
    return user;
  }
}
