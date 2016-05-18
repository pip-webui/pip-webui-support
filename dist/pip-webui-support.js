/**
 * @file Registration of support all pages
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    angular.module('pipSupport', [
        'pipFeedback',
        'pipAnalytics'
    ]);
})();
(function(module) {
try {
  module = angular.module('pipSupport.Templates');
} catch (e) {
  module = angular.module('pipSupport.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('feedback/feedback.html',
    '<!--\n' +
    '@file Feedback page\n' +
    '@copyright Digital Living Software Corp. 2014-2016\n' +
    '-->\n' +
    '\n' +
    '<md-toolbar class="pip-appbar-ext"></md-toolbar>\n' +
    '<pip-document width="800">\n' +
    '\n' +
    '    <pip-feedback-panel data="data" pip-created="$panel = $control"\n' +
    '                        show-pictures="showPictures"\n' +
    '                        show-documents="showDocuments"\n' +
    '                        save-callback="saveCallback"\n' +
    '                        type-collection="typeCollection"></pip-feedback-panel>\n' +
    '\n' +
    '    <div class="pip-footer">\n' +
    '        <pip-content-switch class="hide-xs"></pip-content-switch>\n' +
    '\n' +
    '        <div flex></div>\n' +
    '\n' +
    '        <div layout="row" class="flex-fixed">\n' +
    '            <md-button ng-show="transaction.busy()" ng-click="transaction.abort()" class="md-raised md-warn">\n' +
    '                {{::\'CANCEL\' | translate}}\n' +
    '            </md-button>\n' +
    '            <md-button ng-hide="transaction.busy()" ng-click="goBack()">\n' +
    '                {{::\'CANCEL\' | translate}}\n' +
    '            </md-button>\n' +
    '            <md-button class="md-accent" ng-hide="transaction.busy()" ng-click="onSave()"\n' +
    '                       ng-disabled="data.content == \'\' && data.title == \'\'">\n' +
    '                {{::\'SEND\' | translate}}\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</pip-document>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('pipSupport.Templates');
} catch (e) {
  module = angular.module('pipSupport.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('feedback/feedback_dialog.html',
    '<!--\n' +
    '@file Feedback dialog\n' +
    '@copyright Digital Living Software Corp. 2014-2016\n' +
    '-->\n' +
    '\n' +
    '<md-dialog width="800" class="pip-feedback-dialog">\n' +
    '    <md-dialog-content class="lp24-flex rp24-flex">\n' +
    '        <pip-feedback-panel data="data" pip-created="$panel = $control"\n' +
    '                            show-pictures="showPictures"\n' +
    '                            show-documents="showDocuments"\n' +
    '                            save-callback="saveCallback"\n' +
    '                            type-collection="typeCollection"></pip-feedback-panel>\n' +
    '    </md-dialog-content>\n' +
    '    <md-dialog-actions layout="row">\n' +
    '        <pip-content-switch class="show-gt-sm"></pip-content-switch>\n' +
    '\n' +
    '        <div flex></div>\n' +
    '\n' +
    '        <div layout="row" class="flex-fixed">\n' +
    '            <md-button ng-show="transaction.busy()" ng-click="transaction.abort()" class="md-raised md-warn">\n' +
    '                {{::\'CANCEL\' | translate}}\n' +
    '            </md-button>\n' +
    '            <md-button ng-hide="transaction.busy()" ng-click="goBack()">\n' +
    '                {{::\'CANCEL\' | translate}}\n' +
    '            </md-button>\n' +
    '            <md-button class="md-accent" ng-hide="transaction.busy()" ng-click="onSave()"\n' +
    '                       ng-disabled="data.content == \'\' && data.title == \'\'">\n' +
    '                {{::\'SEND\' | translate}}\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </md-dialog-actions>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('pipSupport.Templates');
} catch (e) {
  module = angular.module('pipSupport.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('feedback/feedback_panel.html',
    '<div class="pip-body tp24-flex">\n' +
    '    <div class="pip-content" layout="column">\n' +
    '        <md-progress-linear ng-show="transaction.busy()" md-mode="indeterminate"\n' +
    '                            class="pip-progress-ontop"></md-progress-linear>\n' +
    '\n' +
    '        <form name="form" novalidate>\n' +
    '            <md-input-container class="md-block hide-gt-xs">\n' +
    '                <md-select ng-model="typeIndex" ng-disabled="transaction.busy()" aria-label="DROPDOWN">\n' +
    '\n' +
    '                    <md-option ng-repeat="action in typeCollection" value="{{ ::$index }}">\n' +
    '                        {{ (action.title || action.name) | translate }}\n' +
    '                    </md-option>\n' +
    '                </md-select>\n' +
    '            </md-input-container>\n' +
    '\n' +
    '            <pip-toggle-buttons ng-model="data.type"\n' +
    '                                pip-buttons="typeCollection"\n' +
    '                                class="bm16 hide-xs">\n' +
    '            </pip-toggle-buttons>\n' +
    '            <p class="tm0 bm16 text-small text-grey line-height-string"\n' +
    '               ng-if="data.type==\'feedback\' || data.type==\'support\'">\n' +
    '                {{::\'FEEDBACK_HINT_FEEDBACK\' | translate}}\n' +
    '            </p>\n' +
    '\n' +
    '            <div ng-if="data.type==\'copyright\'">\n' +
    '                <p class="tm0 bm16 text-small text-grey line-height-string">\n' +
    '                    {{::\'FEEDBACK_HINT_COPYRIGHT\' | translate}}\n' +
    '                </p>\n' +
    '\n' +
    '                <p class="tm0 bm16 text-small text-grey line-height-string">\n' +
    '                    {{::\'FEEDBACK_HINT_COPYRIGHT2\' | translate }}\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="pip-ref-item">\n' +
    '                <pip-avatar pip-party-id="$party.id"\n' +
    '                            pip-party-name="$party.name"\n' +
    '                            class="pip-pic pip-face"></pip-avatar>\n' +
    '                <div class="pip-content">\n' +
    '                    <p class="pip-title">{{$party.name}} </p>\n' +
    '\n' +
    '                    <p class="pip-subtitle">{{$party.email}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div ng-if="data.type!=\'copyright\'">\n' +
    '                <md-input-container class="md-block" md-no-float>\n' +
    '                    <input type="text" ng-model="data.title"\n' +
    '                           ng-disabled="transaction.busy()"\n' +
    '                           placeholder="{{:: \'SUBJECT\' | translate}}"/>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container class="md-block" md-no-float>\n' +
    '                        <textarea ng-model="data.content" ng-disabled="transaction.busy()"\n' +
    '                                  placeholder="{{::\'FEEDBACK_MESSAGE\'|translate}}">\n' +
    '                        </textarea>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '\n' +
    '            <div ng-if="data.type==\'copyright\'">\n' +
    '                <md-input-container class="md-block">\n' +
    '                    <label>{{::\'FEEDBACK_COMPANY\'|translate}}</label>\n' +
    '                    <input type="text" ng-model="data.company_name"\n' +
    '                           ng-disabled="transaction.busy()" placeholder="Company Name"/>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container class="md-block">\n' +
    '                    <label>{{::\'FEEDBACK_ADDRESS\'|translate}}</label>\n' +
    '                    <input type="text" ng-model="data.company_addr"\n' +
    '                           ng-disabled="transaction.busy()"/>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container class="md-block">\n' +
    '                    <label>{{::\'FEEDBACK_COPYRIGHT_HOLDER\' | translate}}</label>\n' +
    '                    <input name="data.copyright_holder" ng-model="data.copyright_holder"\n' +
    '                           ng-disabled="transaction.busy()"\n' +
    '                           step="any" type="text" tabindex="0"\n' +
    '                           required/>\n' +
    '\n' +
    '                    <div ng-messages="errorsWithHint(form.data.copyright_holder)">\n' +
    '                        <div ng-message="hint">\n' +
    '                            {{::\'FEEDBACK_COPYRIGHT_HOLDER_HINT\' | translate}}\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container class="md-block" flex>\n' +
    '                    <label>{{::\'FEEDBACK_ORIGINAL_LOCATION\'|translate}}</label>\n' +
    '                    <input type="text" ng-model="data.original_loc"\n' +
    '                           ng-disabled="transaction.busy()"/>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container class="md-block">\n' +
    '                    <label>{{::\'FEEDBACK_DESCRIBE_COPYRIGHTED\' | translate}}</label>\n' +
    '                    <input name="data.copyrighted_work" ng-model="data.copyrighted_work"\n' +
    '                           ng-disabled="transaction.busy()"\n' +
    '                           step="any" type="text" tabindex="0"\n' +
    '                           required/>\n' +
    '\n' +
    '                    <div ng-messages="errorsWithHint(form.data.copyrighted_work)">\n' +
    '                        <div ng-message="hint">\n' +
    '                            {{::\'FEEDBACK_DESCRIBE_COPYRIGHTED_HINT\'| translate}}\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container class="md-block">\n' +
    '                    <label>{{::\'FEEDBACK_UNAUTHORIZE_LOCATION\' | translate}}</label>\n' +
    '                        <textarea name="data.unauth_loc" ng-model="data.unauth_loc"\n' +
    '                                  ng-disabled="transaction.busy()"\n' +
    '                                  step="any" type="text" tabindex="0"\n' +
    '                                  required></textarea>\n' +
    '\n' +
    '                    <div ng-messages="errorsWithHint(form.data.unauth_loc)">\n' +
    '                        <div ng-message="hint">\n' +
    '                            {{::\'FEEDBACK_UNAUTHORIZE_LOCATION_HINT\' | translate}}\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <div layout="row" class="bm16">\n' +
    '                    <md-checkbox ng-model="data.copyright_conc" class="lm0 bm0 flex-fixed"\n' +
    '                                 aria-label=\'FEEDBACK_COPYRIGHT_CONC\' style="min-width: 24px; margin-top: -2px">\n' +
    '                    </md-checkbox>\n' +
    '                    <p class="m0 text-small text-grey line-height-string">\n' +
    '                        {{::\'FEEDBACK_COPYRIGHT_CONC\'|translate}}\n' +
    '                    </p>\n' +
    '                </div>\n' +
    '\n' +
    '                <div layout="row" class="bm16">\n' +
    '                    <md-checkbox ng-model="data.request_conc" class="lm0 bm0 flex-fixed"\n' +
    '                                 aria-label="FEEDBACK_REGUEST_CONC" style="min-width: 24px; margin-top: -2px">\n' +
    '                    </md-checkbox>\n' +
    '                    <p class="m0 text-small text-grey line-height-string">\n' +
    '                        {{::\'FEEDBACK_REGUEST_CONC\'|translate}}\n' +
    '                    </p>\n' +
    '                </div>\n' +
    '\n' +
    '                <md-input-container class="md-block">\n' +
    '                    <label>{{::\'FEEDBACK_SIGNATURE\' | translate}}</label>\n' +
    '                    <input name="data.signature" ng-model="data.signature" ng-disabled="transaction.busy()"\n' +
    '                           step="any" type="text" tabindex="0"\n' +
    '                           required/>\n' +
    '\n' +
    '                    <div ng-messages="errorsWithHint(form.data.signature)">\n' +
    '                        <div ng-message="hint">{{::\'FEEDBACK_SIGNATURE_HINT\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '\n' +
    '            <pip-picture-list-edit class="bm8" ng-show="showPictures"\n' +
    '                                   pip-picture-ids="data.pic_ids" pip-created="pictures = $event.sender"\n' +
    '                                   ng-disabled="transaction.busy()">\n' +
    '            </pip-picture-list-edit>\n' +
    '\n' +
    '            <pip-document-list-edit ng-show="showDocuments"\n' +
    '                                    pip-documents="data.docs" pip-created="docs = $event.sender"\n' +
    '                                    ng-disabled="transaction.busy()">\n' +
    '            </pip-document-list-edit>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

/**
 * @file Web analytics service
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipAnalytics', []);

    thisModule.run(['$rootScope', '$location', 'pipAnalytics', function ($rootScope, $location, pipAnalytics) {
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                var
                    url = $location.url(),
                    user = ($rootScope.$user || {}).id,
                    language = ($rootScope.$language || 'en');

                // Remove query parameters from URL
                var pos = url.indexOf('?');
                if (pos > 0) url = url.substring(0, pos);

                // Record web analytics (if enabled)
                pipAnalytics.pageView(url, user, language);
            }
        );
    }]);

    thisModule.provider('pipAnalytics', function () {
        var
            enabled = false,
            trackingId = null;

        this.enable = enable;

        this.$get = function () {
            return {
                enabled: enabled,
                trackingId: trackingId,
                pageView: pageView,
                event: event
            };
        };

        return;

        //--------------------------------

        function enable(newTrackingId) {
            if (newTrackingId) {
                trackingId = newTrackingId;
                enabled = true;

                window['GoogleAnalyticsObject'] = 'ga';
                window.ga = window.ga || function () {
                        (window.ga.q = window.ga.q || []).push(arguments)
                    };
                window.ga.l = 1 * new Date();

                window.ga('create', newTrackingId);
                //window.ga('send', 'pageview');
            }
            return enabled;
        };

        function pageView(url, user, language) {
            if (enabled && window.ga) {
                //window.ga('set', 'page', url);

                window.ga('send', 'pageview', {
                    page: url,
                    userId: user,
                    language: language
                });
            }
        };

        function event(category, action, value, user, language) {
            if (enabled && window.ga) {
                window.ga('send', 'event', {
                    eventCategory: category,
                    eventAction: action,
                    eventValue: value,
                    userId: user,
                    language: language
                });
            }
        };
    });
})();
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
        ['pipAuthStateProvider', function (pipAuthStateProvider) {
            // Configure module routes
            pipAuthStateProvider
                .state('feedback', {
                    url: '/feedback',
                    controller: 'FeedbackController',
                    templateUrl: 'feedback/feedback.html',
                    auth: true
                });
        }]
    );

    thisModule.controller('FeedbackController',
        ['$scope', '$rootScope', '$state', 'pipUtils', 'pipAppBar', 'pipToasts', 'pipTranslate', function ($scope, $rootScope, $state, pipUtils, pipAppBar, pipToasts, pipTranslate) {

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

        }]
    );
    
})();
/**
 * @file Feedback dialog controller
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipFeedbackDialog', [
        'pipAppBar', 'pipRest.State', 'pipTransactions', 'pipRest', 'pipDropdown',
        'ngMaterial', 'pipTranslate', 'pipFeedbacksData', 'pipToasts', 
        'pipFeedback.Strings', "pipFeedbackPanel", 'pipSupport.Templates'
    ]);

    thisModule.controller('FeedbackDialogController',
        ['$scope', '$rootScope', '$state', 'pipUtils', 'party', '$mdDialog', 'pipToasts', 'pipTranslate', function ($scope, $rootScope, $state, pipUtils, party, $mdDialog, pipToasts, pipTranslate) {

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
                if ($scope.$panel) $scope.$panel.onSave();
            }
            function onTypeChange() {
                if ($scope.$panel) $scope.$panel.onTypeChange($scope.item);
            }

            function saveCallback () {
                $mdDialog.cancel();
                pipToasts.showNotification(pipTranslate.translate('FEEDBACK_SUCCESS'), null, null, null);
            }


        }]
    );
    
})();
/**
 * @file Announcement details module
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipFeedbackPanel", ['pipUtils', 'pipFocused', 'pipSupport.Templates']);

    thisModule.directive('pipFeedbackPanel',
        function () {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    data: '=',
                    created:'&pipCreated',
                    showPictures: '=',
                    showDocuments: '=',
                    typeCollection:'=typeCollection',
                    saveCallback:'='
                },
                templateUrl: 'feedback/feedback_panel.html',
                controller: 'pipFeedbackPanelController'

            };
        }
    );
    
    thisModule.controller('pipFeedbackPanelController',
        ['$scope', '$rootScope', '$state', 'pipUtils', 'pipAppBar', 'pipTranslate', 'pipFeedbacksData', 'pipTransaction', 'pipToasts', 'pipFormErrors', '$mdDialog', function ($scope, $rootScope, $state, pipUtils, pipAppBar, pipTranslate,
                  pipFeedbacksData, pipTransaction, pipToasts, pipFormErrors, $mdDialog) {

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
            $scope.data.type =  $scope.typeCollection[0].id;


            $scope.$control = {};
            $scope.$control.goBack = pipUtils.goBack;
            $scope.$control.onSave = onSave;
            $scope.$control.onTypeChange = onTypeChange;

            if ($scope.created){
                $scope.created({
                    $control: $scope.$control
                });
            }

            $scope.errorsWithHint = pipFormErrors.errorsWithHint;
            $scope.onTypeChange = onTypeChange;

            return;
            //-----------------------

            function onSave() {
                $scope.form.$setSubmitted();
                if ($scope.form.$invalid) return;

                pipFeedbacksData.createFeedbackWithFiles(
                    {
                        transaction: $scope.transaction,
                        pictures: $scope.pictures,
                        documents: $scope.docs,
                        item: $scope.data
                    },
                    $scope.saveCallback

                )
            };

            function onTypeChange(type) {
                $scope.data.type = $scope.typeCollection[$scope.typeIndex];
                $scope.type = type.name;
            }


        }])

})();
/**
 *  @file String resources for Feedback page
 *  @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipFeedback.Strings', ['pipTranslate']);

    thisModule.config(['pipTranslateProvider', function (pipTranslateProvider) {

        // Set translation strings for the module
        pipTranslateProvider.translations('en', {
            'FEEDBACK_TITLE': 'Contact us',
            'FEEDBACK_HINT_FEEDBACK': 'If you need help or you have some ideas or suggestions to improve Pip.Life just use form below',
            'FEEDBACK_HINT_COPYRIGHT': 'If you believe that content available on Pip.Life infringes one or more of your copyrights, you can use the form below to submit a DMCA notice. Upon receipt of a valid notice, we are required by law to respond to it by disabling access to the allegedly infringing content. Your Infringement Notice may be forwarded to the party that made the content available, or to third parties such as ChillingEffects.org.',
            'FEEDBACK_HINT_COPYRIGHT2': 'If you choose to request removal of content by submitting an infringement notification, please remember that you are initiating a legal process. Do not make false claims. Please be advised that under 17 U.S.C. § 512(f), you may be liable for damages (including costs and attorneys’ fees) if you knowingly misrepresent that a product or activity is infringing your copyrights. Thus, if you are not sure content located on or linked-to by Dribbble infringes your copyright, you should consider first contacting an attorney.',
            'FEEDBACK_COMPANY': 'Company name',
            'FEEDBACK_MESSAGE': 'Message',
            'FEEDBACK_ADDRESS': 'Address',
            'FEEDBACK_COPYRIGHT_HOLDER': 'Copyright holder you represent',
            'FEEDBACK_COPYRIGHT_HOLDER_HINT': 'If representing someone other than yourself',
            'FEEDBACK_ORIGINAL_LOCATION': 'Location of original copyrighted work',
            'FEEDBACK_DESCRIBE_COPYRIGHTED': 'Describe the copyrighted work',
            'FEEDBACK_DESCRIBE_COPYRIGHTED_HINT': 'Helps us identify the specific referenced work',
            'FEEDBACK_UNAUTHORIZE_LOCATION': 'Location of unauthorized material',
            'FEEDBACK_UNAUTHORIZE_LOCATION_HINT': 'Please provide specific page URLs, one per line',
            'FEEDBACK_COPYRIGHT_CONC': 'I have a good faith belief that use of the copyrighted materials described above as allegedly infringing is not authorized by the copyright owner, its agent, or the law',
            'FEEDBACK_REGUEST_CONC': 'I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.',
            'FEEDBACK_SIGNATURE': 'You first and last name',
            'FEEDBACK_SIGNATURE_HINT': 'Signature',
            'FEEDBACK_SUBJECT':'Subject',
            'FEEDBACK_SUCCESS': 'Your message was sent to Pip.Life support team. They will contact you via personal messaging soon. Thanks for your interest in PipLife!'
        });

        pipTranslateProvider.translations('ru', {
            'FEEDBACK_TITLE': 'Обратная связь',
            'FEEDBACK_HINT_FEEDBACK': 'Если Вам нужна помощь или у вас есть идеи или предложения по улучшению Pip.Life используйте рассположенную ниже форму',
            'FEEDBACK_HINT_COPYRIGHT': 'Если вы считаете, что контент, доступный на Pip.Life нарушает одно или более ваших авторских прав, вы можете использовать форму ниже, чтобы представить уведомление DMCA. После получения уведомления, мы по закону обязаны ответить на него, отключив доступ к контенту, который предположительно нарушает авторские права. Уведомление может быть направлено со стороны, представившей контент или третьих сторон, таких как ChillingEffects.org.',
            'FEEDBACK_HINT_COPYRIGHT2': 'Если вы решите запросить удаление содержания, подав уведомление о нарушении, пожалуйста, помните, что вы инициируете судебный процесс. Пожалуйста, обратите внимание, что исодя из статьи 17 U.S.C. § 512 (F), вы можете нести ответственность за убытки (включая расходы и гонорары адвокатам), если вы сознательно искажаете действительность, что продукт или деятельность нарушает ваши авторские права. Таким образом, если вы не уверены, что содержание, расположенное на PipLife нарушает Ваши авторские права посоветуйтесь с адвокатом.',
            'FEEDBACK_COMPANY': 'Название компании',
            'FEEDBACK_MESSAGE': 'Сообщение',
            'FEEDBACK_ADDRESS': 'Адрес',
            'FEEDBACK_COPYRIGHT_HOLDER': 'Владелец авторского права',
            'FEEDBACK_COPYRIGHT_HOLDER_HINT': 'Заполните поле, если Вы  представляете кого-то кроме себя',
            'FEEDBACK_ORIGINAL_LOCATION': 'Расположение оригинальной авторской работы',
            'FEEDBACK_DESCRIBE_COPYRIGHTED': 'Опишите авторские права на произведение',
            'FEEDBACK_DESCRIBE_COPYRIGHTED_HINT': 'Это поможет нам идентифицировать ссылки на работу',
            'FEEDBACK_UNAUTHORIZE_LOCATION': 'Расположение несанкционированного материала',
            'FEEDBACK_UNAUTHORIZE_LOCATION_HINT': 'Пожалуйста, укажите конкретную страницу URL, по одной в строке',
            'FEEDBACK_COPYRIGHT_CONC': 'У меня есть добросовестное предположение, что использование защищенных авторским правом материалов, описанных выше, в качестве якобы нарушает авторские права, не разрешено владельцем авторского права, его агентом или законом',
            'FEEDBACK_REGUEST_CONC': 'Я клянусь под страхом наказания за лжесвидетельство, что содержащаяся в уведомлении информация верна и что я являюсь владельцем авторского права или имею право действовать от имени владельца эксклюзивных прав, которые якобы нарушены.',
            'FEEDBACK_SIGNATURE': 'Ваше имя и фамилия',
            'FEEDBACK_SIGNATURE_HINT': 'Подпись',
            'FEEDBACK_SUBJECT':'Заголовок',
            'FEEDBACK_SUCCESS': 'Ваш запрос передан команде технической поддержки Pip.Life. C вами свяжутся в ближайшее время по электронной почте. Спасибо за ваш интерес и поддержку PipLife.'
        });

    }]);

})();
//# sourceMappingURL=pip-webui-support.js.map
