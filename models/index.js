const sequelize = require('../config/db.config');
const Bus = require('./bus.model');

const models = {
    Bus: Bus.init(sequelize),
};

// Sync database to ensure tables are created
sequelize.sync({ alter: true })  // Use alter to adjust table structure
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Failed to sync database:', err));

module.exports = { sequelize, models };
