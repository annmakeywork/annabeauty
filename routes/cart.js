var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cart', { title: 'ANNA BEAUTY', name: 'anna' });
});

module.exports = router;
