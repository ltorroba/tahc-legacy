var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var port = process.env.PORT || 8000;

var clients = [];

io.on('connection', function(socket) {
  console.log('Client connected.');

  socket.on('disconnect', function() {
    clients.splice(clients.indexOf(socket.name), 1);
    socket.broadcast.emit('leave', { name: socket.name });
    console.log('Client disconnected.');
  });

  socket.on('join', function(name) {
    console.log('User joined as ' + name + '.');

    // Initialize new client
    socket.name = name;
    socket.emit('init', { name: socket.name, clients: clients });

    // Broadcast new client
    clients.push(socket.name);
    socket.broadcast.emit('join', { name: socket.name });
  });

  socket.on('message', function(data) {
    console.log('Received data: ' + data);
    io.emit('message', { name: socket.name, content: data });
  });
});

app.use(express.static(__dirname + '/public'));
require('./app/routes')(app);

server.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
