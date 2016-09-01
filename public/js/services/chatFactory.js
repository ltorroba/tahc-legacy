angular.module('chatFactory', [])
  .factory('ChatFactory', ['socketFactory', function(socketFactory) {
    var socket;
    return {
      desired_group_size: -1,
      messages: [],
      users: [],

      setup: function() {
        socket = socketFactory();
        socket.forward(['message', 'join', 'init', 'leave']);
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
