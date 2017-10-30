var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var User = require('../models/user');

// create reusable transporter object using the default SMTP transport--from mailid
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dummymail2468@gmail.com',
        pass : 'dummy2468'
    }
});

// GET users listing./
router.post('/', function(req, res, next) {

console.log(req.body.email);
console.log(req.body.username);
console.log(req.body.subject);
console.log(req.body.content);

// setup email data with unicode symbols
let mailOptions = {
    from: req.body.username + '&lt;' + req.body.email + '&gt;',//'"MEAN stack"', // sender address
    to:req.body.email,// 'dummymail2468@gmail.com', // //'sravanthidarapu@gmail.com', // list of receivers
    subject: req.body.subject, // Subject line 'Hello ✔'
    text: req.body.content, //'Hello world ?', // plain text body req.body.content,
    // html: '<b>Hello world ?</b>' // html body
};
// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    else{
        var user = new User({ name:req.body.username, email:req.body.email, subject:req.body.subject, content:req.body.content });
            user.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                    res.send('Message %s sent: %s', info.messageId, info.response);

            }
            });
    }
    console.log('Message %s sent: %s', info.messageId, info.response);  
   // res.send('Message %s sent: %s', info.messageId, info.response);
});

});

router.get('/', function(req, res, next){
    res.render('users');
});

router.get('/admin', function(req, res, next) {
  res.redirect("/users")
});

module.exports = router;