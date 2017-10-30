

var events = require('events');
var fs = require('fs');

var _eventemitter = new events.EventEmitter();

_eventemitter.on('firstevent', function(data){
    console.log(data);
})

//second event
_eventemitter.emit('firstevent','Hi this is my firstevent');

_eventemitter.on('secondevent',function(data){
    console.log(data);
});

_eventemitter.emit('secondevent','Hi this is my second event');


//third event
_eventemitter.on('thirdevent',function(data){
    console.log(data);
});

fs.readFile('text.txt', 'UTF8', function(err,data){

        if(!err){
            
            _eventemitter.emit('thirdevent',data);
        }
})

