var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contacts', { title: 'ANNA BEAUTY', name: 'anna' });
});

module.exports = router;