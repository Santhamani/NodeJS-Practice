

var fs = require('fs');
var eve = require('events');
//Write Stream
debugger;
var text = 'Lakshya IT Consulting Pvt Ltd';

var writeStream = fs.createWriteStream('writestream21.txt');

writeStream.write("text", 'UTF8'); // Write the data to stream with encoding to be utf8

writeStream.end; //Mark the end of file

writeStream.on('finish',function(){  //Handle stream events --> finish, and error
    console.log('Writing Finished');
});

writeStream.on('err',function(err){ 
    console.log(err.stack)
});

console.log('Progrm Ended');