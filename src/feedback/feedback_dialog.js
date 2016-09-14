/**
 * @file Feedback dialog controller
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipFeedbackDialog', [
        'pipAppBar', 'pipRest.State', 'pipTransactions', 'pipRest', 'pipDropdown',
        'ngMaterial', 'pipTranslate', 'pipDataFeedback', 'pipToasts',
        'pipFeedback.Strings', 'pipFeedbackPanel', 'pipSupport.Templates'
    ]);

    thisModule.controller('FeedbackDialogController',
        function ($scope, $rootScope, $state, pipUtils, party, $mdDialog, pipToasts, pipTranslate) {

            $rootScope.$party = party;

            $scope.data = {};
            $scope.contentSwitchOption = {
                picture: true,
                document: true,
                location: false,
                event: false
            };

            $scope.goBack = $mdDialog.cancel;
            $scope.onSave = onSave;
            $scope.onTypeChange = onTypeChange;
            $scope.saveCallback = saveCallback;

            return;

            function onSave() {
                if ($scope.$panel) {
                    $scope.$panel.onSave();
                }
            }

            function onTypeChange() {
                if ($scope.$panel) {
                    $scope.$panel.onTypeChange($scope.item);
                }
            }

            function saveCallback() {
                $mdDialog.cancel();
                pipToasts.showNotification(pipTranslate.translate('FEEDBACK_SUCCESS'), null, null, null);
            }
        }
    );

})();
