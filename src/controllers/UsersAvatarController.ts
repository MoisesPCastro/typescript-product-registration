import { Request, Response } from 'express';
import module from '../domainData';

class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const user = await module.useAvatar.execute({
      user_id: Number(req.user.id),
      avatarFilename: String(req.file?.filename)
    });

    return res.json(user);
  }
}

export default new UserAvatarController();
