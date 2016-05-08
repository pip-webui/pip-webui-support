/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipDialogs', ['pipFeedbackDialog']);

    thisModule.controller('SampleDialogController',
        function ($scope, $mdDialog, $rootScope, $pipPopover) {
            $scope.onFeedbackDialog = onFeedbackDialog;

            return;

            function onFeedbackDialog(event) {
                $mdDialog.show({
                    templateUrl: 'feedback/feedback_dialog.html',
                    controller: 'FeedbackDialogController',
                    targetEvent: event,
                    locals: {party: $rootScope.$party}
                }).then(
                    function (answer) {
                        if (answer) {
                            var message = String() + 'RESET_PWD_SUCCESS_TEXT';
                            $scope.onShowToast(message, 'message');
                        }
                    });
            }

        }
    );

})();
