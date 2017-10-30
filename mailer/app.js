var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


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
app.use(express.static(path.join(__dirname, 'public/app/controller/')));
app.use(express.static(path.join(__dirname, 'public/app/directives/')));
//app.use(express.static(path.join(__dirname, 'public/app/factory/')));
//app.use(express.static(path.join(__dirname, 'public/app/routes/')));
app.use(express.static(path.join(__dirname, 'public/app/services/')));
//app.use(express.static(path.join(__dirname, 'public/app/templates/')));
//app.use(express.static(path.join(__dirname, 'public/app/vendors/')));

app.use('/', index);
app.use('/users', users);

//Mongoose
mongoose.connect('mongodb://localhost/form');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log('connection established');
});


// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
