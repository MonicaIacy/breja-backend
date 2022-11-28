import IAddressEntity from './address.entity';

export interface IUserEntity {
  endereco?: IAddressEntity,
  cep?: string,
}
