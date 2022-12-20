const Course  = require('../models/Course')
const {multipleMongooseToObject} = require('../../utils/mongoose')
class SiteController {
    // [GET] /
    home(req, res, next) {

        //lay du lieu ra tu database
        //cach viet callback
        // Course.find({}, function (err, courses) {
        //     if(!err){
        //         res.json(courses);

        //     }else{
        //         next(err);
        //     }

        //   });

        //cach viet promise
        Course.find({})
          .then(courses => {
            
            res.render('home',{
                courses:multipleMongooseToObject(courses)
            });
          }).catch(next);

       

    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    //[GET] /contact
    contact(req, res) {
        res.render('contact');
    }
}

//module.exports --> xuat ra ngoai
module.exports = new SiteController();
