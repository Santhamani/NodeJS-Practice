

var fs = require('fs');

// console.log('Making a directory...');

// fs.mkdir('/Nodejs/training/dir2/dir1',function(err){
//     if(err)
//         console.log(err);
//     else   
//         console.log('Directory created');
// });

fs.readdir('/Nodejs/training', function(err, files){
    if(err)
        console.log(err);
    else
    files.forEach(function(file) {
        console.log(file); 
    }, this);
      
});


