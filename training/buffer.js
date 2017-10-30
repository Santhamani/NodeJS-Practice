
//Concatenate
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

//Write
var buf = new Buffer(256);
var len = buf.write("Simply Easy Learning");
//var wbuf = len.toJSON(buf);
//console.log(wbuf);
console.log("Octets written : "+  len);

//JSON
var jbuf = new Buffer('Sravanthi');
var jbuf2 = jbuf.toJSON(jbuf);

var jbuf1 = new Buffer('Santha');
var jbuf3 = jbuf1.toJSON(jbuf1);

console.log(jbuf2);
console.log(jbuf3);

//Compare - Returns a number indicating whether it comes before or after or is the same as the otherBuffer in sort order.
var buffer1 = new Buffer('Sravanthi');
var buffer2 = new Buffer('Santha');
var buffer4 = new Buffer('Santha');
var result = buffer1.compare(buffer2);

console.log(buffer2.compare(buffer1))
console.log(buffer1.compare(buffer2))

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}
//    0 is returned if target is the same as buf
//    1 is returned if target should come before buf when sorted.
//    -1 is returned if target should come after buf when sorted.


//Copy
 var cbuf = new Buffer("MEAN Stack - Mongo, Express, Angular, Node");

 var cbuf1 =  new Buffer(48);

 cbuf.copy(cbuf1);
 console.log('cbuf content :'+ cbuf1.toString());


//Slice
var sbuf = new Buffer('SarvanthiSantha');

var sbuf1 = sbuf.slice(3, 9);
console.log('sbuf content: '+sbuf1.toString());
console.log('length of the buffer: '+ sbuf.length);

const ebuf = Buffer.from('buffer5');
 for(const pair of ebuf.entries()){
     console.log(pair);
 }
 