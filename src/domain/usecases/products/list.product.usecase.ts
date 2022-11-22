import { IUseCase } from "../usecase.interface"
import IProductEntity from "../../entities/products/products.entity"
import { IProductRepository } from "../../repositories/products.respository.interface"
import ProductsRepository from "../../../adapters/repositories/products.repository"

class ListProductUseCase implements IUseCase {
  constructor(private _repository: IProductRepository) {

  }

  async execute(): Promise<IProductEntity[] | undefined> {
    return await this._repository.list()
  }
}

export default new ListProductUseCase(ProductsRepository)
