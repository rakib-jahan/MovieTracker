(function () {
    'use strict';

    angular
        .module('app')
        .controller('controller', controller);

    controller.$inject = ['$scope', 'service'];

    function controller($scope, service) {

        var vm = this;
        vm.title = 'controller';

        $scope.movieSearch = {};
        $scope.movieSearch.genre = 'All';
        $scope.genres = ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'History', 'Thriller', 'Romance', 'War', 'Sport', 'Horror', 'Western', 'Musical', 'Science fiction'];

        init();

        function init() {
            service.GetMovieList(parseInt(userId)).then(function (data) {
                vm.movieList = data;
                $scope.tempMovieList = vm.movieList;
                $scope.totalItems = $scope.tempMovieList.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = 6;
                $scope.maxSize = 5;
            });
        }

        $scope.filter = function () {
            $scope.tempMovieList = [];
            if ($scope.movieSearch.genre !== 'All') {
                for (var i in vm.movieList) if (vm.movieList[i].Genre === $scope.movieSearch.genre) $scope.tempMovieList.push(vm.movieList[i]);
                $scope.totalItems = $scope.tempMovieList.length;
                return;
            }
            $scope.tempMovieList = vm.movieList;
            $scope.totalItems = $scope.tempMovieList.length;
        };

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.AddRemoveMovieToUser = function (obj) {
            var data = {
                Id: obj.UserMovieDetailId,
                UserId: userId,
                MovieId: obj.Id
            };
            service.AddRemoveMovieToUser(data).then(function (a) {
                if (obj.IsAddedToWatchList) {
                    obj.IsAddedToWatchList = false;
                    obj.UserMovieDetailId = 0;
                }
                else {
                    obj.IsAddedToWatchList = true;
                    obj.UserMovieDetailId = a;
                }
            });
        };
    }
})();