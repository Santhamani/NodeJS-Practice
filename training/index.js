
var express = require('express');
var router = express.Router();
var app = express();

/*routes*/
var things = require('/things.js');
app.use('/things',things);
app.listen(3000);


/* GET home page. */
/*router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.send('Get route on things');
});

