var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('ui-route', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('partial-about', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('partial-home', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('partial-home-list', { title: 'Express' });
});


router.post('/saveuser', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log(req.body.user)
  res.send(true)
});

module.exports = router;
