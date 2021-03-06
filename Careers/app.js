var express = require('express');
var path = require('path');
var ejs = require('ejs')
//var favicon = require('serve-favicon');
var logger = require('morgan');
var http = require("http")
var Sessions = require("sessions")
var session = require('express-session')
var popup = require('window-popup').windowPopup;

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose= require('mongoose');
mongoose.Promise = Promise;

//var dbConfig = require('./routes/db.js');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'angular')));

app.use('/', index);
app.use('/update', users);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

mongoose.connect('mongodb://localhost/mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connection established")

});

// error handler
app.use(function(err, req, res, next) {
//set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
// render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
