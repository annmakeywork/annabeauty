var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'ANNA BEAUTY', name: 'anna' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'ANNA BEAUTY', name: 'anna' });
});

module.exports = router;
