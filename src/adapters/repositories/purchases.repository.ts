import * as Sequelize from "sequelize"

import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface"
import { IPurchaseEntity } from "../../domain/entities/purchases/purchases.entity"
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database"
import  IPurchaseRepository  from "../../domain/repositories/purchase.repository.interface"
import productsModel from "../../infrastructure/persistence/mysql/models/products.models.mysql.database"

export class PurchaseRepository implements IPurchaseRepository {
  constructor(
    private _database: IDatabaseModel,
    private _purchaseModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>
  ) { }
  
  async create(data:IPurchaseEntity): Promise<IPurchaseEntity | undefined> {
    const purchase = await this._database.list(this._purchaseModel)

    return purchase
  }
}

export default new PurchaseRepository(MysqlDatabase.getInstance(), productsModel)
