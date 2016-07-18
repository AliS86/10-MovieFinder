(function() {
    'use strict';

    var movieApp = angular
        .module("movieApp", ['ui.router', 'toastr']);

    movieApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/state1');

        // this starts the router
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "app/state1.html",
                controller: "movieController",
                controllerAs: 'vm'
            })

        .state('state2', {
            url: "/state2/:title",
            templateUrl: "app/state2.html",
            controller: "detailController",
            controllerAs: "vm"

        });
    });
})();
