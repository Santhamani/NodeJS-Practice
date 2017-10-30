

var fs = require('fs');
//var eve = require('events');

var readStream = fs.createReadStream('stream.txt');
var data = '';

readStream.setEncoding('UTF8'); // Set the encoding to be utf8. 

readStream.on('data', function(chunk){ //  This event is fired when there is data is available to read.
    //data += chunk;
    console.log(chunk);
});

readStream.on('end',function(){ // This event is fired when there is no more data to read.
    console.log(data);
});

readStream.on('error', function(err){ //This event is fired when there is any error receiving or writing data.
    console.log(err.stack);
});

console.log('Program Ended');


