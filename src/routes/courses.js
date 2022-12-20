const express = require('express');
const courseController = require('../app/controller/CourseController');
const router = express.Router();

const CourseController = require('../app/controller/CourseController');


router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
