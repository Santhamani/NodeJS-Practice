
//console.log("Hii")

//write file
const fs = require('fs');
fs.writeFile("text.txt", 'Hi this first Node Js program',function(err){

    if(err)
        console.log(err);
    else
    debugger
        console.log('write operation')

});

//read file
fs.readFile('text.txt','UTF8', function(err, data){
    if(err)
        console.log(err);
    else   
        console.log(data);
});

//status
fs.stat('text.txt',function(err,stats){
    if(err){
        return console.log(err);
    }
   console.log(stats);
   console.log('Getting file info..');
   console.log('isFile?: ' + stats.isFile());
   console.log('isDirectory: ' +stats.isDirectory());
   console.log('isBlockDevice: ' +stats.isBlockDevice());
   console.log('isCharacterDevice: ' +stats.isCharacterDevice());
   console.log('isFIFO: ' +stats.isFIFO());
   console.log('isSymbolicLink: ' +stats.isSymbolicLink());
});

//append file
fs.appendFile('text.txt','. Hello this is my file system cmds pgrogram', function(err){
    if(err)
        console.log(err);
    else   
        console.log('Append Operation');
});

//access
fs.access('text.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {
  console.log(err ? 'no access!' : 'can read/write');
});

//open
/*fs.open('text.txt','wx', function(err, fd){
    if(err)
        console.log(err);
    
    else
        console.log(fd);
    
});*/