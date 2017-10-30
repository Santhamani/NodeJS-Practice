

//var array = require('Uint16Array');

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

const buf = Buffer.from(arr.buffer);

console.log(buf);

const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

buf1[0] = 0x53;

// Prints: auffer
console.log(buf1.toString());
console.log(buf1.toString('ascii')); //string to ascii
console.log(buf1.toString('hex')); //string to hex values

// Prints: buffer
console.log(buf2.toString());

const ab = new ArrayBuffer(10);
const abuf = Buffer.from(ab, 0, 3);

console.log(abuf.length);


