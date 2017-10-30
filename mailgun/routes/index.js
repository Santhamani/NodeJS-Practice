var express = require('express');
var router = express.Router();
var mailgun = require('mailgun-js');
var path = require('path');
var fs = require('fs');


router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('contact');
});

router.get('/login', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users');
});

router.post('/contact', function(req, res){

    var api_key = 'key-7a4c8c97c54d1bcf6ba74cc4f9140832';
    var domain = 'sandbox4ef83e89be7345fc98c610e774028649.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    //var filepath = path.join(__dirname, 'images/mailgun_logo.png');
    //mailing list
      var list = mailgun.lists('santha@sandbox4ef83e89be7345fc98c610e774028649.mailgun.org');

      
      
      list.info(function (err, data) {
        // `data` is mailing list info 
        console.log(data);
      });

      //attachment
    var filepath = path.join(__dirname, '../mailgun_logo.png');

 //   var file = readFileSync(filepath);
 
     mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });

    var data = {
      from: 'Mail Gun User <santha@sandbox4ef83e89be7345fc98c610e774028649.mailgun.org>',
      to: 'sravanthidarapu@gmail.com,dummymail2468@gmail.com,snth.ammu@gmail.com',
      //to: 'sravanthidarapu@gmail.com',
      subject: req.body.username,
      text: req.body.content,
      attachment: filepath
      
    };
    
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      if(!error)
      //res.send("Mail Sent !!");
      res.redirect('/login')
     // else
      //res.send("Error in your mail");

});

   

//mailing list
   /*   var list = mailgun.lists('santha@sandbox4ef83e89be7345fc98c610e774028649.mailgun.org');
      
      list.info(function (err, data) {
        // `data` is mailing list info 
        console.log(data);
      });
      
      var bob = {
        subscribed: true,
        address: 'bob@gmail.com',
        name: 'Bob Bar',
        vars: {age: 26}
      };
      
      list.members().create(bob, function (err, data) {
        // `data` is the member details 
        console.log(data);
      });
      
      list.members().list(function (err, members) {
        // `members` is the list of members 
        console.log(members);
      });
      
      list.members('bob@gmail.com').update({ name: 'Foo Bar' }, function (err, body) {
        console.log(body);
      });*/
});

module.exports = router;
