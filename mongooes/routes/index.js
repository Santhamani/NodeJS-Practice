var express = require('express');
var router = express.Router();
var user = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

router.post('/save', function(req, res, next) {
console.log(req.body)
/*var insertUser= new user
  Insertuser.save(req.copy, function(err,data){
    console.log(err)
    if(!err)
    {
      res.send(true)
    }
  })*/
  user({
   fname : req.body.fname,
   email : req.body.email,
   phno : req.body.phno
 }).save(function (err, data) {
   console.log(err)
    if(!err)
    {
     // res.send("Successful Inserted");
     res.redirect('/login');
    }
 });
});

module.exports = router;
