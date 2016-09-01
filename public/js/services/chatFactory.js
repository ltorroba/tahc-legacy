angular.module('chatFactory', [])
  .factory('ChatFactory', ['$log', 'socketFactory', function($log, socketFactory) {
    var socket;
    return {
      desired_group_size: -1,
      messages: [],
      users: [],

      setup: function() {
        socket = socketFactory();
        socket.forward('message');
        socket.forward('join');
        socket.forward('init');
        socket.forward('leave');
      },

      join: function(nickname) {
        if(socket) {
          socket.emit('join', nickname);
        }
      },

      send: function(message) {
        if(socket) {
          socket.emit('message', message);
        }
      }
    };
  }]);
