/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipErrorsSample', ['pipTranslate', 'pipRest',  'pipRest.State']);


    thisModule.config(
        function($stateProvider, pipTranslateProvider, pipAuthStateProvider) {

            // Configure module routes
            pipAuthStateProvider
                .state('error_page', {
                    url: '/error_page',
                    controller: 'SampleErrorsController',
                    templateUrl: 'errors.html',
                    auth: true
                }
            );
            // Set translation strings for the module
            pipTranslateProvider.translations('en', {

            });

            pipTranslateProvider.translations('ru', {
            });

        }
    );

    thisModule.controller('SampleErrorsController',
        function ($scope, $rootScope, $state) {
            console.log(this);

            var date = new Date();

            var error = {
                code: 500,
                config: {},
                data: {
                    name: 'error',
                    message: 'Server down. try again',
                    offlineUntil:  date.toJSON()
                },
                status: 500,
                statusText: 'Internal Server Error'
            };

            var params = {
                error: error,
                unfoundState: {
                    to: 'unfaund',
                    toParams: {}
                },
                fromState: {
                    to: 'about_me',
                    fromParams: {}
                }
            };

            $scope.onLostConnection = onLostConnection;
            $scope.onMaintenance = onMaintenance;
            $scope.onRouteFails = onRouteFails;
            $scope.onUnsupported = onUnsupported;
            $scope.onUnknown = onUnknown;

            return;

            function onUnknown() {
                $state.go('errors_unknown_internal', params);
            };

            function onMaintenance() {
                $state.go('errors_available', params);
            };

            function onRouteFails() {
                $state.go('errors_route', params);
            };

            function onUnsupported() {
                $state.go('errors_unsupported', params);
            };

            function onLostConnection() {
                $state.go('errors_responding', params);
            };

        }
    );

})();
