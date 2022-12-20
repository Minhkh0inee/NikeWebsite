//dùng để đưa vào những trang ko có parent như Homepage, Searchpage
const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');

router.get('/search', siteController.search);
router.get('/contact', siteController.contact);
router.get('/', siteController.home); //LUÔN ĐƯA TUYẾN ĐƯỜNG GÓC XUỐNG DƯỚI CÙNG

module.exports = router;
