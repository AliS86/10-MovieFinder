(function() {
    'use strict';

    angular
        .module("movieApp")
        .controller('movieController', movieController);

    movieController.$inject = ['MainFactory', '$stateParams', 'toastr'];

    /* @ngInject */
    function movieController(MainFactory, $stateParams, toastr) {
        var vm = this;
        vm.title = 'movieController';
        vm.searchM = searchM;
        

        activate();

        ////////////////

        function activate() {
        	searchM();
        }

        function searchM(mName) {
        	MainFactory.getInfo(mName).then(function(result) {
        		vm.names = result.data;
                vm.search = vm.names.Title;
        	});
        }
    }
})();