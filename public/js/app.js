var app = angular.module('app', ['ngRoute']);

angular.module('app')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: ''
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: ''
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);

