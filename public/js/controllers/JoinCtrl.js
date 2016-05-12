angular.module('JoinCtrl', ['chatFactory'])

  .controller('JoinController', function($scope, $location) {
    $scope.progress = 50 + '%';
    $location.path('/chat');
  });
