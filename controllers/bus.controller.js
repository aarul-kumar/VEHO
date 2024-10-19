const { models } = require('../models');

const getAllBuses = async (req, res) => {
    try {
        const buses = await models.Bus.findAll();
        if (!buses.length) {
            return res.status(404).json({ error: 'No buses found' });
        }
        res.json(buses);
    } catch (error) {
        console.error('Error retrieving buses:', error); // Log the actual error
        res.status(500).send({ error: 'Failed to retrieve buses' });
    }
};

const createBus = async (req, res) => {
    const { number, capacity } = req.body;
    try {
        const newBus = await models.Bus.create({ number, capacity });
        res.status(201).json(newBus);
    } catch (error) {
        console.error('Error creating bus:', error); // Log the actual error
        res.status(500).send({ error: 'Failed to create bus' });
    }
};

module.exports = { getAllBuses, createBus };
