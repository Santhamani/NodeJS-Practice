

var mongoose = require('mongoose')

var empSchema = mongoose.Schema({
    ename: String,
    email : String,
    phno : Number,
    age : Number
});
//var Kitten = mongoose.model('Kitten', userSchema);
module.exports.emp  = mongoose.model('emps', empSchema);