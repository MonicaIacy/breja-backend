import { MysqlDatabase } from "../mysql.database"
import * as Sequelize from "sequelize"

export default MysqlDatabase.getInstance().createModel("products", {
  productId: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.DataTypes.STRING,
  description: Sequelize.DataTypes.STRING,
  details: Sequelize.DataTypes.STRING,
  price: Sequelize.DataTypes.STRING,
  inventory: Sequelize.DataTypes.BOOLEAN,
  image: Sequelize.DataTypes.STRING
})
