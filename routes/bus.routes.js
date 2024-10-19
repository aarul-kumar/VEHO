const express = require('express');
const { getAllBuses, createBus } = require('../controllers/bus.controller');
const router = express.Router();

router.get('/', getAllBuses);
router.post('/', createBus);

module.exports = router;
