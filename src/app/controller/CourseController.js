const Course  = require('../models/Course')
const {mongooseToObject} = require('../../utils/mongoose')
class courseController {

    //[GET] /course/:slug
    show(req, res,next) {
       Course.findOne({ slug: req.params.slug})
       .then((course)=>{
            res.render('courses/show',{course:mongooseToObject(course)});
       })
       .catch(next);
    }
     //[GET] /course/create
    create(req,res,next){
        res.render('courses/create')
    }
    //[POST] /course/create
    store(req,res,next){
       const course = new Course(req.body);
       course.save()
        .then(()=> )


    }

    
}



//module.exports --> xuat ra ngoai
module.exports = new courseController();
