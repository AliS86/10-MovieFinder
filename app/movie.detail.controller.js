(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('detailController', detailController);

    detailController.$inject = ['MainFactory', '$stateParams', 'toastr'];

    /* @ngInject */
    function detailController(MainFactory, $stateParams, toastr) {
        var vm = this;
        vm.title = 'detailController';
        vm.searchM = searchM;

        searchM($stateParams.title);


        function searchM(mName) {
            if(mName){
                MainFactory.getDetails(mName).then(function(result) {
                    vm.names = result.data;
                    })
                } else {debugger;}
            }
        }

})();
// ------------------------------------------------------------------------------------
