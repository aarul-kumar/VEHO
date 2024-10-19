const express = require('express');
const { getAllRoutes, createRoute } = require('../controllers/route.controller');
const router = express.Router();

router.get('/', getAllRoutes);
router.post('/', createRoute);

module.exports = router;
