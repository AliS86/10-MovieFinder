(function() {
    'use strict';

    angular
        .module('movieApp')
        .service('MainFactory', MainFactory);

    MainFactory.$inject = ['$http', '$q', 'toastr'];

    /* @ngInject */
    function MainFactory($http, $q, toastr) {
        var service = {
            getInfo: getInfo,
            getDetails: getDetails
        };

        return service;
        ////////////////

        function getInfo(mName) {
                var defer = $q.defer();

             $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/',
                    params: {
                        s: mName
                    }
                })
                .then(function(response) {
                    defer.resolve(response);
                },
                function(error){
                    defer.reject(error);
                });
                    return defer.promise;
                

                

        }

        function getDetails(mName) {
                var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    t: mName
                }
            })

            .then(function(response) {
                defer.resolve(response);
               },
               function(error){

              defer.reject(error);
          }); return defer.promise;

        }

    }
})();
