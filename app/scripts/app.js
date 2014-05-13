'use strict';

angular.module('Gallery', ['Gallery.templates', 'ngRoute'])

    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/pictures', {
                templateUrl: 'views/pictures.html',
                controller: 'picturesCtrl'
            })
            .when('/collages', {
                templateUrl: 'views/collages.html',
                controller: 'collagesCtrl'
            })
            .when('/drawings', {
                templateUrl: 'views/drawings.html',
                controller: 'drawingsCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    .run(function($rootScope) {
        // TODO check device + service reload image on resize
//        $rootScope.imageData = imageData.medium;
//        $rootScope.imageData = imageData.big;
    });
