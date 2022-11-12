import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('products', {
            productId:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: Sequelize.DataTypes.STRING,
            description: Sequelize.DataTypes.STRING,
            style: Sequelize.DataTypes.STRING,
            ibu: Sequelize.DataTypes.INTEGER,
            color: Sequelize.DataTypes.STRING,
            teor: Sequelize.DataTypes.FLOAT,
            temperature: Sequelize.DataTypes.STRING,
            price: Sequelize.DataTypes.FLOAT,
            inventory: Sequelize.DataTypes.BOOLEAN,
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('products');
    }
};