angular.module('ChatCtrl', ['chatFactory'])

  .controller('ChatController', function($log, $scope, ChatFactory) {
    ChatFactory.setup();
    $scope.messages = [];

    $scope.sendMessage = function() {
      if($scope.input)
        ChatFactory.send($scope.input);

      $scope.input = null;
    };

    $scope.$on('socket:message', function(event, data) {
      $scope.messages.push(data);
    });
  });
