import { MysqlDatabase } from "../mysql.database"
import * as Sequelize from "sequelize"

export default MysqlDatabase.getInstance().createModel("order_items", {
  orderId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: {
        tableName: "orders",
      },
      key: "orderId",
    },
  },
  title: Sequelize.DataTypes.STRING,
  cartQuantity: Sequelize.DataTypes.NUMBER,
})
