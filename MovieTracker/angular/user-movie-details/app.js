(function () {
    'use strict';

    angular.module('app', ['ui.router', 'ui.bootstrap'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/user-movie-details");
            $stateProvider
                .state('user-movie-details', {
                    url: '/user-movie-details',
                    templateUrl: '/angular/user-movie-details/partials/main.html',
                    controller: 'controller',
                    controllerAs: 'umdc'
                });
        }]);
})();