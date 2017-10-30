

var zlib = require('zlib');

const fs = require('fs');

const gzip = zlib.createGunzip();

const inp = fs.createReadStream('writestream21.txt.gz');
const out = fs.createWriteStream('writestream21.txt');

inp.pipe(gzip).pipe(out);
/*var fs = require("fs");
var zlib = require('zlib');*/

// Decompress the file input.txt.gz to input.txt
/*fs.createReadStream('input1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input1.txt'));
  
console.log("File Decompressed.");*/