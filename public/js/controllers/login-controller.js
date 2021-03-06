angular.module('app')
    .controller('loginController', ['$scope', '$http', 'userService', function($scope, $http, User){
        $scope.login = function(){
            console.log('in login');
            var config = {url: '/login', method: 'POST'};

            $http(config)
                .success(function(data, status, headers, config){
                    if (data.status){
                        User.isLogged = true;
                        User.username = data.username;
                    }
                    else {
                        User.isLogged = false;
                        User.username = '';
                    }
                })
                .error(function(data, status, headers, config){
                    User.isLogged = false;
                    User.username = '';
                })
        }
    }]);
