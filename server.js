const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const busRoutes = require('./routes/bus.routes');
const routeRoutes = require('./routes/route.routes');
const scheduleRoutes = require('./routes/schedule.routes');
const sequelize = require('./config/db.config');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/schedules', scheduleRoutes);

const PORT = process.env.PORT || 4000; // Change port if necessary
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL database.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
