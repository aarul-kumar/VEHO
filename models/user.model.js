const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'Users',
            timestamps: true,
        });
    }
}

module.exports = User;
