(function () {
    'use strict';

    angular.module('app', ['ui.router', 'ui.bootstrap'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/user-activity-details");
            $stateProvider
                .state('user-activity-details', {
                    url: '/user-activity-details',
                    templateUrl: '/angular/user-activity-details/partials/main.html',
                    controller: 'controller',
                    controllerAs: 'mdc'
                });
        }]);
})();