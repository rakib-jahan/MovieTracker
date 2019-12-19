(function () {
    'use strict';

    angular
        .module('app')
        .controller('controller', controller);

    controller.$inject = ['$scope', 'service'];

    function controller($scope, service) {

        var vm = this;
        vm.title = 'controller';

        init();

        function init() {
            service.GetMovieList(parseInt(userId)).then(function (data) {
                vm.movieList = data;
                $scope.totalItems = vm.movieList.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = 6;
                $scope.maxSize = 5;
            });
        }

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };   

        $scope.updateStatus = function (obj) {
            
        };
    }
})();