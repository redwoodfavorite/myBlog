angular.module('app')
    .controller('mainController', ['$scope', 'requestService',
        function($scope, requestService){
            requestService.getPosts().success(function(data){
                console.log(data);
                $scope.posts = data;
            }).error(function(data, status, headers, config) {
                console.log(data);
            });
        //     $scope.posts = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in diam ante, sit amet molestie risus. Etiam pellentesque aliquet enim, ut molestie enim suscipit vel. Donec odio est, cursus ac pulvinar a, elementum non elit. Donec non eros in neque dictum interdum ut hendrerit turpis. Morbi posuere massa at sapien elementum aliquet. Duis vel venenatis neque. Praesent venenatis tortor eget felis venenatis a pulvinar tortor laoreet. Vestibulum a nunc at metus ullamcorper rhoncus. Aenean malesuada pharetra justo in sollicitudin.',
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in diam ante, sit amet molestie risus. Etiam pellentesque aliquet enim, ut molestie enim suscipit vel. Donec odio est, cursus ac pulvinar a, elementum non elit. Donec non eros in neque dictum interdum ut hendrerit turpis. Morbi posuere massa at sapien elementum aliquet. Duis vel venenatis neque. Praesent venenatis tortor eget felis venenatis a pulvinar tortor laoreet. Vestibulum a nunc at metus ullamcorper rhoncus. Aenean malesuada pharetra justo in sollicitudin.',
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in diam ante, sit amet molestie risus. Etiam pellentesque aliquet enim, ut molestie enim suscipit vel. Donec odio est, cursus ac pulvinar a, elementum non elit. Donec non eros in neque dictum interdum ut hendrerit turpis. Morbi posuere massa at sapien elementum aliquet. Duis vel venenatis neque. Praesent venenatis tortor eget felis venenatis a pulvinar tortor laoreet. Vestibulum a nunc at metus ullamcorper rhoncus. Aenean malesuada pharetra justo in sollicitudin.'];
        }]);
