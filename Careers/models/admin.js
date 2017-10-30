

const mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
   
    email : String,
    password : String
});
//var Kitten = mongoose.model('Kitten', userSchema);
//module.exports.user  = mongoose.model('users', userSchema
 
 var admin= mongoose.model('admin',adminSchema);
//var adminlogin = new admin({email:'santha.g@lakshyait.in', password : 'hello220792'})

 module.exports = admin;    