import { IPurchaseEntity } from "../entities/purchases/purchases.entity"

export default interface IPurchaseRepository  {
  create(data:IPurchaseEntity): Promise<IPurchaseEntity | undefined>
}
