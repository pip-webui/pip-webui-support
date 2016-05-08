/**
 * @file Feedback controller
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipFeedback', [
        'pipAppBar', 'pipRest.State', 'pipTransactions', 'pipRest', 'pipDropdown',
        'ngMaterial', 'pipTranslate', 'pipFeedbacksData', 'pipToasts', 
        'pipFeedback.Strings', "pipFeedbackPanel", 'pipSupport.Templates'
    ]);

    thisModule.config(
        function (pipAuthStateProvider) {
            // Configure module routes
            pipAuthStateProvider
                .state('feedback', {
                    url: '/feedback',
                    controller: 'FeedbackController',
                    templateUrl: 'feedback/feedback.html',
                    auth: true
                });
        }
    );

    thisModule.controller('FeedbackController',
        function ($scope, $rootScope, $state, pipUtils, pipAppBar, pipToasts, pipTranslate) {

            showAppBar();
            $scope.data = {};
            $scope.contentSwitchOption = {
                picture: true,
                document: true,
                location: false,
                event: false
            };

            $scope.goBack = pipUtils.goBack;
            $scope.onSave = onSave;
            $scope.onTypeChange = onTypeChange;
            $scope.saveCallback = saveCallback;

            return;

            function showAppBar() {

                pipAppBar.showBackNavIcon();
                pipAppBar.showTitleText("FEEDBACK_TITLE");
                pipAppBar.showLocalActions([
                    {
                        class: 'icon-send', hideSmall: true,
                        callback: onSave
                    }
                ], []);

                pipAppBar.showShadowSm();
            }

            function onSave() {
                if ($scope.$panel) $scope.$panel.onSave();
            }
            function onTypeChange() {
                if ($scope.$panel) $scope.$panel.onTypeChange($scope.item);
            }

            function saveCallback () {
                pipUtils.goBack();
                //$mdDialog.close();
                pipToasts.showNotification(pipTranslate.translate('FEEDBACK_SUCCESS'), null, null, null);
            }

        }
    );
    
})();