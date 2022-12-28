const express = require('express');
const courseController = require('../app/controller/CourseController');
const router = express.Router();

const CourseController = require('../app/controller/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormAction);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.deleteForce); //xóa thật database
router.get('/:slug', courseController.show);

module.exports = router;
