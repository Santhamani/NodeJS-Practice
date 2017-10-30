var express = require('express');
var router = express.Router();

console.log(router);
/* GET home page. */
router.get('/index', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.send('Get route on things');
 console.log('server');
});


router.post('/index', function(req, res, next){
  res.send('Hello world');
});

module.exports = router;
