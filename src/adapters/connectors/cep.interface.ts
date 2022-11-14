import { IAddressEntity } from "../../domain/entities/users/address.entity"

export interface Cep {
    buscaEndereco(cep: string): Promise<IAddressEntity | undefined>;
}
