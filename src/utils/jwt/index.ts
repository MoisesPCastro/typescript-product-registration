import { sign } from 'jsonwebtoken';

interface ITokenJwt {
  create(id: number): Promise<string>;
}

class TokenJwt implements ITokenJwt {
  async create(id: number): Promise<string> {
    return sign({}, 'token_product_registration', {
      subject: String(id),
      expiresIn: '1d'
    });
  }
}

export default new TokenJwt();
