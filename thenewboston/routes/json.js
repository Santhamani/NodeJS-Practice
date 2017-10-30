

var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('json', { title: 'ExpressJS - Json Data',
              name : 'Json Data',
              videodata : vd  });
});

router.get('/:categoryID', function(req, res, next) {

//var catogory = vd.catogories[req.params.categoryID];

res.send(req.params['categoryID']);
//res.send('Hello');

/* res.send(`
    <h1>${catogory.categoryName}</h1>
    <p>${catogory.categoryDescription}</p>
 `);*/
});

module.exports = router;
