import { ICartEntity } from "../entities/cart/cart.entity"

export default interface ICartRepository {
  create(data: ICartEntity): Promise<ICartEntity | undefined>
}
