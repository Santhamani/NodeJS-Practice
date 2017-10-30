var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/dashboard', function(req, res, next) {
  //email: req.body.email
  res.render('dashboard');
});

module.exports = router;
