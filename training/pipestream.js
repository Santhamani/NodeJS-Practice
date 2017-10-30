

var fs = require('fs');

var readStream = fs.createReadStream('stream.txt');

var writeStream = fs.createWriteStream('writestream.txt');

readStream.pipe(writeStream);

console.log('Piping finished');


//Piping is a mechanism where we provide the output of one stream as the input to another stream.