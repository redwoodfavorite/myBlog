var app = angular.module('app', ['ngRoute']);

angular.module('app')
    .config(['$routeProvider', '$locationProvider',
     function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainController',
                access: {
                    isFree: true
                }
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: '',
                access: {
                    isFree: true
                }
            })
            .when('/music', {
                templateUrl: 'views/music.html',
                controller: '',
                access: {
                    isFree: true
                }
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: '',
                access: {
                    isFree: true
                }
            })
            .when('/new', {
                templateUrl: 'views/new.html',
                controller: 'postController',
                access: {
                    isFree: false
                }
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController',
                access: {
                    isFree: true
                }
            })
            .otherwise({
                redirectTo: '/'
            });


        $locationProvider.html5Mode(true);

    }]);

app.run(['$rootScope', '$location', 'userService', function($rootScope, $location, user){
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
        if (!user.isLogged && !currRoute.access.isFree){
            $location.path('/login');
        }
    });
}]);

