//Express
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var PDFDocument = require('pdfkit'); // add pdfkit module to access it

var index = require('./routes/index');

app.set('port', process.env.PORT || 3000) // set the environment variable for the application

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine','ejs');

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

var server = app.listen(app.get('port'),function(){
        console.log('Listenig to' + app.get('port'));
});
