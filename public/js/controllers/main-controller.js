angular.module('app')
    .controller('mainController', ['$scope', 'requestService', 'userService',
        function($scope, requestService, User){

            requestService.getPosts().success(function(data){
                // console.log(data);
                $scope.posts = data;
                $scope.getRandomNinjas();

            }).error(function(data, status, headers, config) {
                console.log(data);
            });

            $scope.getRandomNinjas = function(){
              console.log("elements", document.getElementsByClassName('icon'));
                var icons = document.getElementsByClassName('icon');

            }
        }]);
