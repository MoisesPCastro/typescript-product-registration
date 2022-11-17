import { IModelCustomers } from './../../../model/modelICustomers';
import { CustomersRepository } from '../../../repository/CustomersRepository';
import { AppError } from '../../../errors/AppError';
import {
  IHttpRequestCustomer,
  IHttpRequestUser
} from '../../../repository/interfaceRepository';
import { Bcrypt } from '../../../utils/bcrypt';
import { ICustomerDomain } from '../../interfaceDomainData';

export class DomainCustomers implements ICustomerDomain {
  constructor(private readonly customerRepository: CustomersRepository) {}

  async addDomain(value: IHttpRequestUser): Promise<IModelCustomers> {
    const existCustomers = await this.customerRepository.getEmailCustomers(
      value.email
    );
    if (existCustomers)
      throw new AppError('Usuário já existe na base de dados', 409);

    await this.customerRepository.addCustomers(value);
    return value;
  }

  async indexDomain(id: number): Promise<IModelCustomers> {
    const existCustomers = await this.customerRepository.getIdCustomers(id);
    if (!existCustomers)
      throw new AppError('Usuário não existe na base de dados', 404);

    return await this.customerRepository.getIdCustomers(id);
  }

  async searchDomain(): Promise<IModelCustomers[]> {
    return await this.customerRepository.searchCustomers();
  }

  async updateDomein(
    values: IHttpRequestCustomer,
    id: number
  ): Promise<IModelCustomers> {
    const existCustomers = await this.customerRepository.getIdCustomers(id);
    if (!existCustomers)
      throw new AppError('Usuário não existe na base de dados', 404);

    const existCustomersEmail =
      await this.customerRepository.getAllEmailCustomers(values.email);

    if (existCustomersEmail.length && existCustomersEmail[0].id !== id)
      throw new AppError('Email existente na base de dados', 409);

    return await this.customerRepository.updateCustomers(values, id);
  }

  async deletarDomain(id: number): Promise<IModelCustomers> {
    const existCustomers = await this.customerRepository.getIdCustomers(id);
    if (!existCustomers)
      throw new AppError('Usuário não existe na base de dados', 404);

    return await this.customerRepository.deleteCustomers(id);
  }
}
