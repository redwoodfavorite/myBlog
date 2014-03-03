angular.module('app')
    .factory('requestService', ['$http', function($http){


        var getPosts = function(){
            return $http({method: 'GET', url: '/post'})
            // .success(function(data, status, headers, config) {
            //     console.log('request was successful')

            // })
            // .error(function(data, status, headers, config) {
            //     console.log(data);
            // });
        };

        return {
            getPosts : getPosts
        };
    }]);
