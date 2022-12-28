const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');
class courseController {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[GET] /course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /course/create
    store(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => {});
    }

    //[GEt] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /courses/:id
    delete(req, res, next) {
        //đang áp dụng xóa mềm, delete() của deletePlugIn
        Course.delete({ _id: req.params.id }) //chọc vào database -> tìm kiếm theo id -> xóa thằng id dựa trên params
            .then(() => res.redirect('back')) //khi xoa xong mot database, se quay tro lai trang My shoes vi ta su dung redirect 'back' ve trang do
            .catch(next);
    }

    //[DELETE] /courses/:id/deleteForce
    deleteForce(req, res, next) {
        //áp dụng xóa thật dữ liệu
        Course.deleteOne({ _id: req.params.id }) //chọc vào database -> tìm kiếm theo id -> xóa thằng id dựa trên params
            .then(() => res.redirect('back')) //khi xoa xong mot database, se quay tro lai trang My shoes vi ta su dung redirect 'back' ve trang do
            .catch(next);
    }

    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'Restore':
                Course.restore({ _id: { $in: req.body.shoesIds } }) //do khi submit gia tri submit la mot mang nen chung ta phai dung toi syntax lay tu mang
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            case 'Delete':
                Course.deleteOne({ _id: { $in: req.body.shoesIds } }) //do khi submit gia tri submit la mot mang nen chung ta phai dung toi syntax lay tu mang
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action invalid' });
        }
    }
}

//module.exports --> xuat ra ngoai
module.exports = new courseController();
