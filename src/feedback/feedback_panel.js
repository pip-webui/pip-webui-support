/**
 * @file Announcement details module
 * @copyright Digital Living Software Corp. 2014-2016
 */

(function (angular) {
    'use strict';

    var thisModule = angular.module('pipFeedbackPanel', ['pipUtils', 'pipFocused', 'pipSupport.Templates']);

    thisModule.directive('pipFeedbackPanel',
        function () {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    data: '=',
                    created: '&pipCreated',
                    showPictures: '=',
                    showDocuments: '=',
                    typeCollection: '=typeCollection',
                    saveCallback: '='
                },
                templateUrl: 'feedback/feedback_panel.html',
                controller: 'pipFeedbackPanelController'

            };
        }
    );
    thisModule.controller('pipFeedbackPanelController',
        function ($scope, $rootScope, $state, pipUtils, pipAppBar, pipTranslate,
                  pipDataFeedback, pipTransaction, pipToasts, pipFormErrors) {

            $scope.$party = $rootScope.$party;
            $scope.typeCollection = [
                {id: 'support', name: 'SUPPORT'},
                {id: 'feedback', name: 'FEEDBACK'},
                {id: 'copyright', name: 'COPYRIGHT'},
                {id: 'business', name: 'BUSINESS'},
                {id: 'advertising', name: 'ADVERTISING'}
            ];
            pipTranslate.translateObjects($scope.typeCollection, 'name', 'name');

            $scope.transaction = pipTransaction('feedback', $scope);

            $scope.type = pipTranslate.translate('FEEDBACK');
            $scope.data.sender_id = $rootScope.$party.id;
            $scope.data.sender_name = $rootScope.$party.name;
            $scope.data.sender_email = $rootScope.$party.email;
            $scope.data.pic_ids = [];
            $scope.data.docs = [];
            $scope.data.type = $scope.typeCollection[0].id;
            $scope.$control = {};
            $scope.$control.goBack = pipUtils.goBack;
            $scope.$control.onSave = onSave;
            $scope.$control.onTypeChange = onTypeChange;

            if ($scope.created) {
                $scope.created({
                    $control: $scope.$control
                });
            }

            $scope.errorsWithHint = pipFormErrors.errorsWithHint;
            $scope.onTypeChange = onTypeChange;

            return;
            // ------------------------------------------------------

            function onSave() {
                $scope.form.$setSubmitted();
                if ($scope.form.$invalid) {
                    return;
                }

                pipDataFeedback.createFeedbackWithFiles(
                    {
                        transaction: $scope.transaction,
                        pictures: $scope.pictures,
                        documents: $scope.docs,
                        item: $scope.data
                    },
                    $scope.saveCallback

                );
            }

            function onTypeChange(type) {
                $scope.data.type = $scope.typeCollection[$scope.typeIndex];
                $scope.type = type.name;
            }
        });
})(window.angular);
