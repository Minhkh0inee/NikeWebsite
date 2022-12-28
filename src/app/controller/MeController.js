const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');
class MeController {
    //[GET] /stored/courses
    storeCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/store-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    //[GET] /trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

//module.exports --> xuat ra ngoai
module.exports = new MeController();
