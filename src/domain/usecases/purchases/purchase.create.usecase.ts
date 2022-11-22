import { IPurchaseEntity } from "../../entities/purchases/purchases.entity"
import IPurchaseRepository from "../../repositories/purchase.repository.interface"
import PurchaseRepository from "../../../adapters/repositories/purchases.repository"

import { IUseCase } from "../usecase.interface"

export class CreatePurchaseUseCase implements IUseCase {
  constructor(private _repository: IPurchaseRepository) {}

  async execute(data: IPurchaseEntity): Promise<IPurchaseEntity | undefined> {
    return await this._repository.create(data)
  }
}

export default new CreatePurchaseUseCase(PurchaseRepository)
