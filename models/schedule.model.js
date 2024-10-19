const { Model, DataTypes } = require('sequelize');

class Schedule extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            busId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            routeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            departureTime: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            arrivalTime: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Schedule',
            tableName: 'Schedules',
            timestamps: true,
        });
    }
}

module.exports = Schedule;
