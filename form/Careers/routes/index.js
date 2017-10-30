
var express = require('express');
var router = express.Router();
var admin = require('../models/admin'); 
var dashboard = require('../models/dashboard'); 
console.log(admin)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

router.get('/ourcareers', function(req, res, next) {
  dashboard.find({}, function(err, data){
    res.render('ourcareers', { data : data});
   });
});

router.post('/careers', function(req, res, next) {
  //res.render('dashboard')
console.log(req.body)
 //res.render('careers', req.body);
dashboard({

      _id: req.body.job_id,
      job_title : req.body.job_title,
      role : req.body.role,
      location : req.body.location,
      experience : req.body.experience,
      salary: req.body.salary,
      job_type : req.body.job_type,
      skills : req.body.skills,
      job_description : req.body.job_description
}).save(function(err,data){
  console.log(err);
    if(err)
     res.json(err);
    else//
    console.log(data)
    //res.send("Succesfully inserted");
    res.render('dashboard.ejs', data);
 });
});



router.post('/dashboard', function(req, res, next) {
    // res.render('/dashboard');
    console.log(req.body)
admin({
   email : 'santha.g@laskhyait.in',
   password :'hello220792'
 }).save(function(err,data){
  console.log(err);
    if(err)
     res.json(err);
    else
    // res.send("Succesfully inserted");
     res.render('dashboard.ejs');
 });
});

module.exports= router;
