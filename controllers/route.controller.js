const { models } = require('../models');

const getAllRoutes = async (req, res) => {
    try {
        const routes = await models.Route.findAll();
        res.json(routes);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve routes' });
    }
};

const createRoute = async (req, res) => {
    const { name, startLocation, endLocation } = req.body;
    try {
        const newRoute = await models.Route.create({ name, startLocation, endLocation });
        res.status(201).json(newRoute);
    } catch (error) {
        res.status(500).send({ error: 'Failed to create route' });
    }
};

module.exports = { getAllRoutes, createRoute };
