'use strict';

angular.module('galerieApp', ['ngRoute'])

    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: function($scope) {
                    $scope.images = [{src: 'images/pictures/1.jpg'}, {src: 'images/pictures/2.jpg'}];
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    .run(function($rootScope) {
        var nav = navigator.userAgent;
        var prefix = '';

        if (/Firefox[\/\s](\d+\.\d+)/.test(nav)) {
            prefix = '-moz-';
        } else if (/MSIE (\d+\.\d+);/.test(nav)) {
            prefix = '-ms-';
        } else if (/Opera[\/\s](\d+\.\d+)/.test(nav)) {
            prefix = '-o-';
        } else if (/Safari[\/\s](\d+\.\d+)/.test(nav)) {
            prefix = '-webkit-';
        }

        $rootScope.cssPrefix = prefix;
    });