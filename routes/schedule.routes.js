const express = require('express');
const { getAllSchedules, createSchedule } = require('../controllers/schedule.controller');
const router = express.Router();

router.get('/', getAllSchedules);
router.post('/', createSchedule);

module.exports = router;
