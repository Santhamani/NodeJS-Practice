var express = require('express');
var router = express.Router();
var dashboard = require('../models/dashboard'); 

/* GET users listing. */
router.get('/update', function(req, res, next) {
  //email: req.body.email
  dashboard.find({},function(err, data){
    res.render('update',{ editdata : data });
  });
});

module.exports = router;
