(function (angular) {
    'use strict';

    var thisModule = angular.module('pipFeedbackSamples', ['pipTranslate', 'pipRest', 'pipFeedbackDialog']);

    thisModule.config(function (pipTranslateProvider, pipAuthStateProvider) {

        // Set translation strings for the module
        pipTranslateProvider.translations('en', {
            FEEDBACK: 'Feedback',
            SUPPORT: 'Support',
            COPYRIGHT: 'Copyright',
            BUSINESS: 'Business',
            ADVERTISING: 'Advertising',
            SUBJECT: 'Subject',
            FEEDBACK_DIALOG: 'Feedback dialog',
            OPEN_FEEDBACK_DIALOG: 'Open feedback dialog',
            FEEDBACK_PAGE: 'Feedback page',
            OPEN_FEEDBACK_PAGE: 'Open feedback page',
            SIGNOUT: 'Sign out'
        });

        pipTranslateProvider.translations('ru', {
            FEEDBACK: 'Обратная связь',
            SUPPORT: 'Поддержка',
            COPYRIGHT: 'Авторские права',
            BUSINESS: 'Комерция',
            ADVERTISING: 'Реклама',
            SUBJECT: 'Предмет',
            FEEDBACK_DIALOG: 'Диалог для отзыва',
            OPEN_FEEDBACK_DIALOG: 'Открыть диалог для отзыва',
            FEEDBACK_PAGE: 'Страница для отзыва',
            OPEN_FEEDBACK_PAGE: 'Открыть страницу для отзыва',
            SIGNOUT: 'Выход'
        });

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
                pipAppBar.showMenuNavIcon();
                pipAppBar.showTitleText('FEEDBACK_TITLE');
                pipAppBar.showLanguage();

                pipAppBar.showShadowSm();
            }
        }
    );

})(window.angular);
