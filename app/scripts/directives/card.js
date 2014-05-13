'use strict';

angular.module('Gallery').directive('card', function(zIndexService, animationService) {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var cardSize = 200;     // check css

    function randomCoordinates() {
        var x = Math.floor(Math.random() * (screenWidth - cardSize));
        var y = Math.floor(Math.random() * (screenHeight - cardSize));
        var rotation = Math.floor(Math.random() * 61) - 30;

        return {x: x, y: y, rotation: rotation};
    }

    function getVendorTransformPrefix() {
        var nav = navigator.userAgent;
        if (/Firefox[\/\s](\d+\.\d+)/.test(nav)) {
            return '-moz-transform';
        }
        if (/MSIE (\d+\.\d+);/.test(nav)) {
            return '-ms-transform';
        }
        if (/Opera[\/\s](\d+\.\d+)/.test(nav)) {
            return '-o-transform';
        }
        if (/Safari[\/\s](\d+\.\d+)/.test(nav)) {
            return '-webkit-transform';
        }
        return 'transform';
    }

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/card.html',
        scope: {
            image: '='
        },
        link: {
            pre: function($scope, element) {
                var coords = randomCoordinates();
                var screenHeight = window.innerHeight;
                var cssVendor = getVendorTransformPrefix();

                element.css('top', screenHeight + 'px');
                element.css('z-index', zIndexService.getZ());

                var animation = new TWEEN.Tween({top: screenHeight, left: 0, deg: 0})
                    .to({top: coords.y, left: coords.x, deg: coords.rotation}, 150)
                    .easing(TWEEN.Easing.Exponential.Out)
                    .onUpdate(function() {
                        element.css('top', this.top + 'px');
                        element.css('left', this.left + 'px');
                        element.css(cssVendor, 'rotate(' + this.deg + 'deg)');
                    });

                animationService.put(animation);
            },
            post: function($scope, element) {
                var dragImage = angular.element(element.children()[0]).clone();

                element.on('dragstart', function(e) {
                    dragImage.css('z-index', zIndexService.getZ());
                    e.dataTransfer.setDragImage(dragImage[0], cardSize, cardSize);
                    element.css('opacity', 0);
                });

                element.on('dragend', function(e) {
                    element.css('top', e.layerY + 'px');
                    element.css('left', e.layerX + 'px');
                    element.css('opacity', 1);
                });
            }
        }
    };
});

/**
 * Give an incremental z-index to stack the card onto the previous one
 */
angular.module('Gallery').service('zIndexService', function() {
    var zIndex = 0;

    return {
        getZ: function() {
            return ++zIndex;
        }
    };
});
