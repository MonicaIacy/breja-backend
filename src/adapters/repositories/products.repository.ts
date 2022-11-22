import * as Sequelize from "sequelize"

import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface"
import  IProductEntity  from "../../domain/entities/products/products.entity"
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database"
import { IProductRepository } from "../../domain/repositories/products.respository.interface"
import productsModel from "../../infrastructure/persistence/mysql/models/products.models.mysql.database"

export class ProductsRepository implements IProductRepository {
  constructor(
    private _database: IDatabaseModel,
    private _productModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>
  ) { }
  
  async list(): Promise<IProductEntity[]> {
    const products = await this._database.list(this._productModel)

    return products
  }
}

export default new ProductsRepository(MysqlDatabase.getInstance(), productsModel)
