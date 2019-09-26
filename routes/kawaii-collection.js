var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('kawaii-collection', { title: 'ANNA BEAUTY', name: 'Anna' });
});

router.get('/glossy-lipstick', function(req, res, next) {
  res.render('glossy-lipstick', { title: 'glossy-lipstick', name: 'Anna', cost: '20' });
});

router.get('/long-lasting-foundation', function(req, res, next) {
  res.render('foundation', { title: 'long-lasting-foundation', name: 'Anna', cost: '35' });
});

module.exports = router;
