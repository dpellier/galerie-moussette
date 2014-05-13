'use strict';

angular.module('galerieApp').directive('imageDraft', function() {
    return {
        templateUrl: 'views/imageDraft.html',
        replace: true,
        restrict: 'E',
        scope: {
            images: '='
        }
    };
});

angular.module('galerieApp').directive('imageCard', function($rootScope) {

    function randomCoordinates() {
        var headerSize = 50;

        return {
            x: Math.floor(Math.random() * (window.innerWidth - 200)) + 'px',
            y: Math.floor(Math.random() * ((window.innerHeight - 200) - headerSize + 1) + headerSize) + 'px',
            rotation: Math.floor(Math.random() * 61) - 30
        };
    }

    function addRotation(elem, value) {
        elem.css($rootScope.cssPrefix + 'transform', 'rotate(' + value + 'deg)');
    }

    return {
        templateUrl: 'views/imageCard.html',
        replace: true,
        restrict: 'E',
        link: function ($scope, image) {
            var lastIndex = $scope.$index + 1;
            var coords = randomCoordinates();

            image.css('left', coords.x);
            image.css('top', coords.y);
            image.css('z-index', lastIndex);
            addRotation(image, coords.rotation);

            image.css('height', '200px');

//            image.bind('dragstart', function(e) {
//                lastIndex++;
//                image.css('z-index', lastIndex);
//            });

            image[0].addEventListener('dragstart', function(e) {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('Text', lastIndex);
                    return false;
                },
                false
            );


            //            image.draggable({
//                cursor: 'move',
//                start: function(e) {
//                    e.target.css('z-index', 2);
//                }
//            });
        }
    };
});