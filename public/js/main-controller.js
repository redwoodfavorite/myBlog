angular.module('app')
    .controller('mainController', ['$scope', 'requestService', 'userService',
        function($scope, requestService, User){
            requestService.getPosts().success(function(data){
                console.log(data);
                $scope.posts = data;
            }).error(function(data, status, headers, config) {
                console.log(data);
            });
        }]);
