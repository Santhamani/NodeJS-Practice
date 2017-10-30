
const fs = require('fs');

debugger;
fs.readFilewtach('text.txt','UTF8', function(err, data){
    if(err)
        console.log(err);
    else   
        console.log(data);
});