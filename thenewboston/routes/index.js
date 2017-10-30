
var express = require('express');
var router = express.Router();

var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressJS',
              name : 'Sravs'});
});

/*router.get('/', function(req, res, next) {
  //res.send('Hi this is Santha');
  request('http://www.linkedin.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
  res.send(body);
});
});*/

module.exports = router;
