const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/NewsController');

// newsController.index

router.get('/:slug', newsController.show);

router.get('/', newsController.index); //LUÔN ĐƯA TUYẾN ĐƯỜNG GÓC XUỐNG DƯỚI CÙNG

module.exports = router;
