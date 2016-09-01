angular.module('JoinCtrl', ['chatFactory'])

  .controller('JoinController', function($scope, $rootScope, $location, ChatFactory) {
    $scope.progress = 50 + '%';

    $scope.sendJoin = function() {
      ChatFactory.setup();
      if($scope.name)
        ChatFactory.join($scope.name);
    };

    // Triggered when user first joins a room; sets up their environment
    $scope.$on('socket:init', function(event, data) {
      ChatFactory.users = data.clients;
      ChatFactory.users.push(data.name);
      $location.path('/chat');
    });
  });
