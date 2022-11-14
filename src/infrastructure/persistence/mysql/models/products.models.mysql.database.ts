import { MysqlDatabase } from "../mysql.database"
import * as Sequelize from "sequelize"

export default MysqlDatabase.getInstance().createModel("products", {
  productId: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.DataTypes.STRING,
  description: Sequelize.DataTypes.STRING,
  style: Sequelize.DataTypes.STRING,
  ibu: Sequelize.DataTypes.INTEGER,
  color: Sequelize.DataTypes.STRING,
  alcoholContent: Sequelize.DataTypes.FLOAT,
  temperature: Sequelize.DataTypes.STRING,
  price: Sequelize.DataTypes.FLOAT,
  inventory: Sequelize.DataTypes.BOOLEAN,
})
