'use strict';

/**
 * Notify when all the expected images are loaded
 */
angular.module('Gallery').service('imageLoadingService', function($rootScope) {
    var loaded = 0;
    var toLoad = 0;

    return {
        imageLoaded: function() {
            loaded++;
            if (loaded === toLoad) {
                $rootScope.$broadcast('sliderImagesLoaded');
            }
        },
        init: function(nb) {
            toLoad = nb;
        }
    };
});

/**
 * Notify when the current image is loaded
 */
angular.module('Gallery').directive('notifyOnLoad', function(imageLoadingService) {
    return function($scope, element, attr) {
        var img = new Image();

        img.onload = function() {
            imageLoadingService.imageLoaded();
        };

        img.src = attr.notifyOnLoad;
    }
});
