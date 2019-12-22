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
            service.GetUserActivityDetails(parseInt(userId)).then(function (data) {
                $scope.activityList = data;
                $scope.totalItems = $scope.activityList.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = 6;
                $scope.maxSize = 5;
            });
        }

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
    }
})();