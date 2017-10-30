var mongoose = require('mongoose')
/*
var userSchema = mongoose.Schema({
    fname: String,
    email : String,
    phno : Number
});*/
//var Kitten = mongoose.model('Kitten', userSchema);

var Schema = new mongoose.Schema({
     fname: String,
    email : String,
    phno : Number
});

var user = mongoose.model('user', Schema);
//module.exports.user  = user;
module.exports = user;