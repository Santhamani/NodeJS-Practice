var express = require('express');
var router = express.Router();
//const nodemailer = require('nodemailer');

router.get('/', function(req, res, next){

    res.render('index',{ title: 'Express' });


})

module.exports = router;