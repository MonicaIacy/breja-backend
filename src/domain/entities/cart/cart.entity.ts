import { IOrderEntity } from "../orders/orders.entity"
import { IUserEntity } from "../users/user.entity"

export interface ICartEntity {
  cartTotalAmount: number
  cartTotalQuantity: number
  cartItems: IOrderEntity[]
  user: IUserEntity
}
