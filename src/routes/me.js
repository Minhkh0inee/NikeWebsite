const express = require('express');

const router = express.Router();

const meController = require('../app/controller/MeController');

router.get('/trash/courses', meController.trashCourses);
router.get('/stored/courses', meController.storeCourses);

module.exports = router;
