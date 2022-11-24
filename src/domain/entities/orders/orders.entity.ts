export interface IOrderEntity {
  orderId?: number
  productId?: number
  title: string
  description: string
  details: string
  price: number
  inventory: boolean
  image: string
  cartQuantity: number
}
