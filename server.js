var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var port = process.env.PORT || 8000;

io.on('connection', function(socket) {
  console.log('Client connected.');

  socket.on('disconnect', function() {
    console.log('Client disconnected.');
  });

  socket.on('message', function(data) {
    console.log('Received data: ' + data);
    io.emit('message', { content: data });
  });
});

app.use(express.static(__dirname + '/public'));
require('./app/routes')(app);

server.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
