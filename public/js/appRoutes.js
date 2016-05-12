angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .when('/join/:num', {
      templateUrl: 'views/join.html',
      controller: 'JoinController'
    })

    .when('/chat', {
      templateUrl: 'views/chat.html',
      controller: 'ChatController'
    })

    .otherwise({
      redirectTo: '/'
    });
}]);
