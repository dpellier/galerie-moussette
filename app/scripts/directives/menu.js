'use strict';

angular.module('galerieApp').directive('menu', function() {
    return {
        templateUrl: 'views/menu.html',
        replace: true,
        restrict: 'E'
    };
});