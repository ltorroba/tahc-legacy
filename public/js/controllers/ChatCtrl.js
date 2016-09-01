angular.module('ChatCtrl', ['chatFactory'])

  .controller('ChatController', function($log, $scope, ChatFactory) {
    $scope.room = ChatFactory;

    $scope.sendMessage = function() {
      if($scope.input)
        ChatFactory.send($scope.input);

      $scope.input = null;
    };

    // Called when a message is received
    $scope.$on('socket:message', function(event, data) {
      ChatFactory.messages.push(data);
    });

    // Called when another user joins the room
    $scope.$on('socket:join', function(event, data) {
      ChatFactory.users.push(data.name);
    });

    // Called when another user leaves the room
    $scope.$on('socket:leave', function(event, data) {
      ChatFactory.users.splice(ChatFactory.users.indexOf(data.name), 1);
    });
  });
