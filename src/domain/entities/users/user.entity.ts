
import IAddressEntity from './address.entity';

export interface IUserEntity {
  endereco?: IAddressEntity,
  cep?: string,
  name?: string,
  address?: string,
  phone?: string
}
