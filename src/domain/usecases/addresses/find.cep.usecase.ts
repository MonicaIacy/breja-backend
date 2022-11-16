import { IAddressEntity } from "../../entities/users/address.entity";
import { IUseCase } from "../usecase.interface"
import { CepFactory } from "../../../adapters/connectors/cepfactory.api";
import { ViaCepFactory } from "../../../infrastructure/apis/cep/viacepfactory.api";
import {IUserEntity} from "../../entities/users/user.entity"


export class FindCepUseCase implements IUseCase {

    constructor(private _viaCep: CepFactory) {

    }

    async execute(data: IUserEntity): Promise<IUserEntity | undefined> {
      try {
        data.endereco = await this._viaCep.preencheEndereco(data.cep);
        
      } catch (error) {
        console.log(error)
        
      } 
        
        return await data.endereco;
    }
}

export default new FindCepUseCase(
    new ViaCepFactory(),
    
);