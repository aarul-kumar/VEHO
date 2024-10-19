const { models } = require('../models');

const getAllSchedules = async (req, res) => {
    try {
        const schedules = await models.Schedule.findAll();
        res.json(schedules);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve schedules' });
    }
};

const createSchedule = async (req, res) => {
    const { busId, routeId, departureTime, arrivalTime } = req.body;
    try {
        const newSchedule = await models.Schedule.create({ busId, routeId, departureTime, arrivalTime });
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(500).send({ error: 'Failed to create schedule' });
    }
};

module.exports = { getAllSchedules, createSchedule };
