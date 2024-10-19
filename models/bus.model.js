const { Model, DataTypes } = require('sequelize');

class Bus extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            capacity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Bus',
            tableName: 'Buses',  // Make sure this matches the exact table name
            timestamps: true,    // If your table doesn’t have timestamps, set this to false
        });
    }
}

module.exports = Bus;
