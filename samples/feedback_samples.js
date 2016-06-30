(function (angular) {
    'use strict';

    var thisModule = angular.module('pipFeedbackSamples', ['pipTranslate', 'pipRest', 'pipFeedbackDialog']);

    thisModule.config(function (pipTranslateProvider, pipAuthStateProvider) {

        // Set translation strings for the module
        pipTranslateProvider.translations('en', {});

        pipTranslateProvider.translations('ru', {});

        // Configure module routes
        pipAuthStateProvider
            .state('feedback_samples', {
                url: '/feedback_samples',
                controller: 'pipFeedbackSamplesController',
                templateUrl: 'feedback_samples.html',
                auth: true
            });
    });

    thisModule.controller('pipFeedbackSamplesController',
        function ($scope, $mdDialog, $rootScope, $pipPopover, $state, pipAppBar) {
            $scope.onFeedbackDialog = onFeedbackDialog;
            $scope.onFeedbackPage = onFeedbackPage;

            showAppBar();

            return;
            // -----------------------------------------------------------------------------------------------------

            function onFeedbackPage() {
                $state.go('feedback', {});
            }

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

            function showAppBar() {
                pipAppBar.hideNavIcon();
                pipAppBar.showTitleText('FEEDBACK_TITLE');
                pipAppBar.showLocalActions([], []);

                pipAppBar.showShadowSm();
            }
        }
    );

})(window.angular);
