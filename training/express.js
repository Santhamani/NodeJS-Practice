
var express = require('express');

var app = express();

//app.get('/hello', function(req, res){

    //res.render('form')
  //  res.send('hello');
//})
app.get('/', function(req, res){

    //res.render('form')
    res.send('hello wolrd');
})
app.listen(3000, function(){

    console.log('server starting at port 3000')
    //if()

})