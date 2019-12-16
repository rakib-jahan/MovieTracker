(function () {
    'use strict';

    angular.module('app', ['ui.router', 'ui.bootstrap'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/movie-details");
            $stateProvider
                .state('movie-details', {
                    url: '/movie-details',
                    templateUrl: '/angular/movie-details/partials/main.html',
                    controller: 'controller',
                    controllerAs: 'mdc'
                });
        }]);
})();