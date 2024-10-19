const { Model, DataTypes } = require('sequelize');

class Route extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            startLocation: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            endLocation: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Route',
            tableName: 'Routes',
            timestamps: true,
        });
    }
}

module.exports = Route;
