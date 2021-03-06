//Express
var express = require('express');
//var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
var io = require('socket.io')();



app.set('port', process.env.PORT || 3000) // set the environment variable for the application
app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views','app/views');

app.locals.siteTitle = 'Lakshya IT Consulting';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

var server = app.listen(app.get('port'),function(){
        console.log('Listenig to' + app.get('port'));
});

io.attach(server);

io.on('connection', function(socket){
        console.log('User Connected');
        socket.on('postMessage',function(data){
           // console.log('User disconected');
           io.emit('updateMessages', data);
        });
});
//reload(server, app);


//Creating Simple Server
/*var http = require('http');

var myServer = http.createServer(function(req, res){
    res.writeHead(200,{ "Content-Type":"text/html" });
    res.write('<h1>MEAN Stack</h1>');
    res.end();
}).listen(3000);
console.log('Go to http:/localhost:3000 on your browser');*/