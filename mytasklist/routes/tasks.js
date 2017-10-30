

var express = require('express')
var router = express.Router();

// getting-started.js
var mongodb     = require('mongodb');
var MongoClient = mongodb.MongoClient;

var dburl = "mongodb://localhost:27017/mytasklist";

//Get All Tasks
router.get('/tasks', function(req, res, next) {
  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('tasks').find().toArray(function(err, docs){
      if(err) throw err;
     res.send(docs);
      db.close();
    });
  });
});

//Get Single tasks
router.get('/tasks/:id', function(req, res, next) {
  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('tasks').find({_id: new mongodb.ObjectID(req.params.id)}).toArray(function(err, docs){
      if(err) throw err;
     res.send(docs);
      db.close();
    });
  });
});


//Save tasks
router.post('/tasks', function(req, res, next){
    var task = req.body;
    if(!task.title || (task.isDone+ '')){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else{
        db.tasks.save(task, function(err, docs){
           if(err) {
               res.send(err)
           }
            res.json(docs);
        });
    }
});

//Delete Task
router.delete('/tasks/:id', function(req, res, next) {
  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('tasks').remove({_id: new mongodb.ObjectID(req.params.id)}).toArray(function(err, docs){
      if(err) throw err;
     res.send(docs);
      db.close();
    });
  });
});

//Update task
router.put('/tasks/:id', function(req, res, next) {
    var taks = req.body;
  var upTask ={};
  if(task.isDone){
      upTask.isDone= task.isDone;
  }
    if(task.title){
      upTask.title= task.title;
  }

  if(!upTask){
      res.status(400);
        res.json({
            "error":"Bad Data"
        });
  } else{
      MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('tasks').update({_id: new mongodb.ObjectID(req.params.id)}, upTask, {}).toArray(function(err, docs){
      if(err) throw err;
     res.send(docs);
      db.close();
    });
  });  
  }
});


module.exports = router;