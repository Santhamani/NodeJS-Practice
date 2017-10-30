var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mailgun = require('mailgun-js');
var path = require('path');

var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*app.get('/', function(req,res){
  res.render('contact');
});

app.post('/contact', function(req, res){

    var api_key = 'key-7a4c8c97c54d1bcf6ba74cc4f9140832';
    var domain = 'sandbox4ef83e89be7345fc98c610e774028649.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = {
      from: 'Mail Gun User <postmaster@sandbox4ef83e89be7345fc98c610e774028649.mailgun.org>',
      to: 'snth.ammu@gmail.com',
      subject: req.body.username,
      text: req.body.content
    };
    
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      if(!error)
      res.send("Mail Sent !!");
      else
      res.send("Error in your mail");
});

});*/

module.exports = app;
