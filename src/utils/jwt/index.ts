import { sign } from 'jsonwebtoken';
import authConfig from '../../config/auth';

interface ITokenJwt {
  create(id: number): Promise<string>;
}

class TokenJwt implements ITokenJwt {
  async create(id: number): Promise<string> {
    return sign({}, authConfig.jwt.secret, {
      subject: String(id),
      expiresIn: authConfig.jwt.expiresIn
    });
  }
}

export default new TokenJwt();
