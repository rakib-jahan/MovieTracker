﻿(function() {
    'use strict';

    angular
        .module('app')
        .service('service', service);

    service.$inject = ['$http', '$q'];

    function service($http, $q) {

        return (
            {
                GetUserActivityDetails: GetUserActivityDetails
            }
        );

        function GetUserActivityDetails(userId) {
            var request = $http.get('/Controllers/UserMovieDetails/GetUserActivityDetails?falseParam=1&userId=' + userId);
            return request.then(HandleSuccess, HandleError);
        }

        function HandleError(response) {
            if (
                !angular.isObject(response.data) ||
                !response.data.message
            ) {
                return ($q.reject("An unknown error occurred."));
            }
            return ($q.reject(response.data.message));
        }

        function HandleSuccess(response) {
            return (response.data);
        }
    }
})();