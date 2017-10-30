/* NodeJs mongodb tutorial - insert update delete records */

var express     = require('express');
var router      = express.Router();
var mongodb     = require('mongodb');
var MongoClient = mongodb.MongoClient;

var dburl = "mongodb://localhost:27017/careers";

/* GET careers listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('careers').find().toArray(function(err, docs){
      if(err) throw err;
      res.render('index.ejs', {data: docs});
      db.close();
    });
  });
});

router.get('/fetchdata', function(req, res, next) {
   var id = req.query.id;
   MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('careers').find({_id: new mongodb.ObjectID(id)}).toArray(function(err, docs){
      if(err) throw err;
      res.send(docs);
      db.close();
    });
  });
});

router.post('/add', function(req, res, next) {
  MongoClient.connect(dburl, function(err, db) {
    if(err) { throw err;  }
    var collection = db.collection('careers');
    var careers = {'job_title': req.body.job_title, 'role': req.body.role, 'location': req.body.location, 'experience': req.body.experience, 'salary': req.body.salary, 'job_type': req.body.job_type, 'skills': req.body.skills, 'job_description': req.body.job_description};
    collection.insert(careers, function(err, result) {
    if(err) { throw err; }
      db.close();
      res.redirect('/');
     });
  });
});
router.post('/edit', function(req, res, next) {
  MongoClient.connect(dburl, function(err, db) {
    if(err) { throw err;  }
    var collection = db.collection('careers');
    var careers = {'job_title': req.body.job_title, 'role': req.body.role, 'location': req.body.location, 'experience': req.body.experience, 'salary': req.body.salary, 'job_type': req.body.job_type, 'skills': req.body.skills, 'job_description': req.body.job_description};
    collection.update({'_id':new mongodb.ObjectID(req.body.id)}, {$set:{'job_title': req.body.job_title, 'role': req.body.role, 'location': req.body.location, 'experience': req.body.experience,'salary': req.body.salary,'job_type': req.body.job_type,'skills': req.body.skills, 'job_description': req.body.job_description }}, function(err, result) {
    if(err) { throw err; }
      db.close();
      res.redirect('/');
     });
  });
});

router.get('/delete', function(req, res, next) {
  var id = req.query.id;
  MongoClient.connect(dburl, function(err, db) {
    if(err) { throw err;  }

    db.collection('careers', function(err, careers) {
      careers.deleteOne({_id: new mongodb.ObjectID(id)});
      if (err){
         throw err;
       }else{
          db.close();
          res.redirect('/');
       }
    });
  });
});

router.get('/careers', function(req, res, next) {
  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('careers').find().toArray(function(err, docs){
      if(err) throw err;
      res.render('career.ejs', {data: docs});
      db.close();
    });
  });

  
});

module.exports = router;
