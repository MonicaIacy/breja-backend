import IAddressEntity from '../users/address.entity'
import IProductEntity from '../products/products.entity'

export interface IPurchaseEntity {
    purchaseId?: number
    name: string
    address:IAddressEntity
    telephone: number
    product: IProductEntity[]
    cartTotalAmount: number

}
