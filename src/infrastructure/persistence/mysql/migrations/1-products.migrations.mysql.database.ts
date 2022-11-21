import * as Sequelize from "sequelize"

export default {
  up: (queryInterface: Sequelize.QueryInterface) => {
    return queryInterface.createTable("products", {
      productId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.TEXT,
      details: Sequelize.DataTypes.STRING,
      price: Sequelize.DataTypes.STRING,
      inventory: Sequelize.DataTypes.BOOLEAN,
      image: Sequelize.DataTypes.STRING
    })
  },
  down: (queryInterface: Sequelize.QueryInterface) => {
    return queryInterface.dropTable("products")
  },
}
