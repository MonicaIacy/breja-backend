// import * as Sequelize from "sequelize"

// import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface"
// import { ICartEntity } from "../../domain/entities/cart/cart.entity"
// import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database"
// import ICartRepository from "../../domain/repositories/cart.repository.interface"
// import ordersModelsMysqlDatabase from "../../infrastructure/persistence/mysql/models/orders.models.mysql.database"
// import orderItemsModelsMysqlDatabase from "../../infrastructure/persistence/mysql/models/order.items.models.mysql.database"

// export class CartRepository implements ICartRepository {
//   constructor(
//     private _database: IDatabaseModel,
//     private _ordersModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
//     private _orderItemModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>
//   ) {}

//   async create(data: ICartEntity): Promise<ICartEntity | undefined> {
//     const order = await this._database.create(this._ordersModel, data)
//     return data
//   }
// }

// export default new CartRepository(MysqlDatabase.getInstance(), cartsModel)
