import { MysqlDatabase } from "../mysql.database"
import * as Sequelize from "sequelize"

export default MysqlDatabase.getInstance().createModel("orders", {
  orderId: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: Sequelize.DataTypes.STRING,
  userAddress: Sequelize.DataTypes.STRING,
  userPhone: Sequelize.DataTypes.STRING,
  cartTotalAmount: Sequelize.DataTypes.FLOAT,
  cartTotalQuantity: Sequelize.DataTypes.NUMBER,
})
