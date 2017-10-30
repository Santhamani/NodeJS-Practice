
var express = require('express');
var router = express.Router();
var admin = require('../models/admin'); 
var dashboard = require('../models/dashboard'); 
var http = require("http")
var Sessions = require("sessions")
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
var popup = require('window-popup').windowPopup;
console.log(admin)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

router.get('/careers', function(req, res, next) {
  dashboard.find({},function(err, data){
res.render('careers', { jobdata: data });
  });
});

router.get('/update', function(req, res, next){
  dashboard.find({},function(err, data){
  res.render('update', { editdata : data });
  });
});

router.get('/update/:$_id', function(req, res, next){
  var _id = req.params.$_id;
  dashboard.find({'$_id':$_id},function(err, data){
   	if(err) res.json(err);
		else res.redirect('/update');
    });
});

router.get('/login', function(req, res, next){
      res.render('index',{ title: 'Careers' });
     //req.session.destroy(function(){
     //res.redirect('/');
//});
});

router.post('/jobpost', function(req, res, next) {
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

router.post('/update', function(req, res, next) {
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
}).update(function(err,data){
  console.log(err);
    if(err)
     res.json(err);
    else//
    console.log(data)
    //res.send("Succesfully inserted");
     res.render('update.ejs', data);
 });
});

router.post('/dashboard', function(req, res, next) {
    // res.render('/dashboard');
    console.log(req.body);
    if(req.body.email == 'santha.g@lakshyait.in' && req.body.password == 'hello220793')
       res.render('dashboard.ejs');
    else
      res.render("index.ejs",{ title: 'Express' });
    //popup(500, 500, 'http://www.google.sk');
    //window.windowPopup(500, 500, 'http://www.google.sk');
});

module.exports= router;
