import bcrypt from 'bcrypt';

interface IBacrypt {
  encrypt(password: string): Promise<string>;
  decrypt(valueDigitado: string, valueBanco: string): Promise<boolean>;
}

export class Bcrypt implements IBacrypt {
  async encrypt(password: string): Promise<string> {
    return bcrypt.hashSync(password, 1);
  }

  async decrypt(valueDigitado: string, valueBanco: string): Promise<boolean> {
    return bcrypt.compare(valueDigitado, valueBanco);
  }
}
