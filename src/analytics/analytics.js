/**
 * @file Web analytics service
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipAnalytics', []);

    thisModule.run(function ($rootScope, $location, pipAnalytics) {
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
    });

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