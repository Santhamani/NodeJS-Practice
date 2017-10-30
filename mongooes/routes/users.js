var express = require('express');
var router = express.Router();
var user=require('../models/user');
console.log(user)

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
 res.render('users',  { title: 'Express' });
  
});

router.post('/save', function(req, res, next) {
console.log(req.body)
var insertUser= new user
  Insertuser.save(req.copy, function(err,data){
    console.log(err)
    if(!err)
    {
      res.send(true)
    }
  })
});
module.exports = router;
