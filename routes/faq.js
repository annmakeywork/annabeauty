var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('faq', { title: 'ANNA BEAUTY', name: 'anna' });
});

module.exports = router;