import IProductEntity from "../entities/products/products.entity"

export interface IProductRepository {
  list(): Promise<IProductEntity[]>
}
