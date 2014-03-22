angular.module('app')
    .factory('requestService', ['$http', function($http){

        var getPosts = function(){
            return $http({method: 'GET', url: '/post'})
        };

        return {
            getPosts : getPosts
        };
    }]);
