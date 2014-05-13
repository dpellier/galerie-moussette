'use strict';

angular.module('Gallery').service('animationService', function() {
    var animations = [];
    var running = false;

    function updateAnimation() {
        if (running) {
            window.requestAnimationFrame(updateAnimation);
            TWEEN.update();
        }
    }

    return {
        animate: function() {
            if (!animations.length) {
                return;
            }

            var self = this;
            var i = 0;

            for (i; i < animations.length - 1; i++) {
                animations[i].chain(animations[i + 1]);
            }
            animations[i].onComplete(function() {
                self.clear();
            });

            animations[0].start();
            running = true;
            updateAnimation();
        },
        clear: function() {
            TWEEN.removeAll();
            running = false;
            animations = [];
        },
        put: function(animation) {
            animations.push(animation);
        }
    };
});

/**
 * Start the animation at the end of the ng-repeat
 */
angular.module('Gallery').directive('animateOnEnd', function(animationService) {
    return function ($scope) {
        if ($scope.$last) {
            animationService.animate();
        }
    }
});
