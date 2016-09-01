angular.module('chatFactory', [])
  .factory('ChatFactory', ['$rootScope', 'socketFactory', function($rootScope, socketFactory) {
    var socket, ngSocket;
    return {
      desired_group_size: -1,
      messages: [],
      users: [],

      setup: function() {
        socket = io.connect('/');
        ngSocket = socketFactory({ ioSocket: socket });
        ngSocket.forward(['message', 'join', 'init', 'leave']);

        socket.on('disconnect', function() {
          $rootScope.$broadcast('socket:disconnect');
        });
      },

      join: function(nickname) {
        if(ngSocket) {
          ngSocket.emit('join', nickname);
        }
      },

      send: function(message) {
        if(ngSocket) {
          ngSocket.emit('message', message);
        }
      }
    };
  }]);
