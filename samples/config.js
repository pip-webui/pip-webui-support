/**
 * @file Global configuration for sample application
 * @copyright Digital Living Software Corp. 2014-2016
 */

(function (angular) {
    'use strict';

    var thisModule = angular.module('pipSampleConfig',
        ['pipRest.State', 'pipRest', 'pipEntry', 'pipSideNav', 'pipAppBar']);

    // Configure application services before start
    thisModule.config(
        function ($mdThemingProvider, $urlRouterProvider, pipAuthStateProvider, pipRestProvider, pipSideNavProvider,
                  pipAppBarProvider, pipEntryProvider, $mdIconProvider) {

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);

            // Set global constants
            pipAppBarProvider.appTitleText('Sample Application');
            pipAppBarProvider.globalSecondaryActions([
                {name: 'global.signout', title: 'SIGNOUT', state: 'signout'}
            ]);

            // Configure REST API
            // pipRestProvider.version('1.0');
            pipRestProvider.serverUrl('http://alpha.pipservices.net');

            // Configure entry pages
            // pipEntryProvider.fixedServerUrl('http://alpha.pipservices.net');

            // Configure default states
            pipAuthStateProvider.unauthorizedState('signin');
            pipAuthStateProvider.authorizedState('feedback_samples');

            $urlRouterProvider.otherwise(function ($injector, $location) {
                return $location.$$path === '' ? '/signin' : '/feedback_samples';
            });

            // Configure navigation menu
            pipSideNavProvider.sections([
                {
                    links: [
                        {title: 'Feedback', url: '/feedback_samples'}
                    ]
                },
                {
                    links: [
                        {title: 'Signout', url: '/signout'}
                    ]
                }
            ]);

        }
    );

})(window.angular);

