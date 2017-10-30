var express = require('express');
var router = express.Router();
var emp = require('../models/emp'); 
console.log(emp)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/empdata', function(req, res, next) {
 console.log(req.body)
 var insertEmp = new emp
 InsertUser.save(req.copy, function(err,data){
   console.log(err)
   if(!err){
    res.send(true)
   }
 })
 
});

module.exports = router;
