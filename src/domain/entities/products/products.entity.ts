export default interface IProductEntity {
  productId?: number,
  title: string,
  description: string,
  details: string,
  price: number,
  inventory: boolean,
  image: string
  cartQuantity?: number
}
