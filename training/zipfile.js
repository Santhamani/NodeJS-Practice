
var zlib = require('zlib');

const fs = require('fs');

const gzip = zlib.createGzip();

const inp = fs.createReadStream('writestream21.txt');
const out = fs.createWriteStream('writestream21.txt.gz');

inp.pipe(gzip).pipe(out);
