

const mongoose = require('mongoose');

var dashboardSchema = mongoose.Schema({
   
    _id : String,
    job_title : String,
    role : String,
    location : String,
    experience : String,
    salary: String,
    job_type : String,
    skills : String,
    job_description : String
});
//var Kitten = mongoose.model('Kitten', userSchema);
//module.exports.user  = mongoose.model('users', userSchema
 
 var dashboard= mongoose.model('dashboard',dashboardSchema);
 module.exports = dashboard;  