'use strict';

angular.module('Gallery').directive('slider', function(animationService, imageLoadingService, $document, ImageDealer) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/slider.html',
        scope: {
            type: '@',
            max: '@'
        },
        link: {
            pre: function($scope) {
                imageLoadingService.init($scope.max);

                $scope.imageDealer = new ImageDealer($scope.type, 'slider', $scope.max);
            },
            post: function($scope) {
                //-----------------------------------------------------------------------------
                // COMMON

                //-----------------------------------------------------------------------------

                //-----------------------------------------------------------------------------
                // CONTAINER

                var container = angular.element(document.getElementById('sliderContainer'));

                var imageWidth = 500;   // check css
                var imageMargin = 50;   // check css
                var imageBlockWidth = imageWidth + imageMargin * 2;
                var imageBlockHalfWidth = imageBlockWidth / 2;

                var containerWidth = $scope.max * imageBlockWidth;
                var maxContainerX = 0;
                var minContainerX = 0;

                function containerCalibration() {
                    minContainerX = (window.innerWidth / 2) - imageBlockHalfWidth;
                    maxContainerX = -(containerWidth - (window.innerWidth / 2) - imageBlockHalfWidth);
                    container.css('left', minContainerX + 'px');
                }

                container.css('width', containerWidth + 'px');
                containerCalibration();

                //-----------------------------------------------------------------------------

                //-----------------------------------------------------------------------------
                // CURSOR

                var cursor = angular.element(document.getElementById('sliderCursor'));

                var maxCursorX = 0;
                var minCursorX = 0;
                var cursorCurrentX = 0;

                function cursorCalibration() {
                    var current = cursor.css('left');

                    // Get the x position when the cursor is at max right
                    cursor.css('left', '');
                    cursor.css('right', '25%');
                    var cursorRect = cursor[0].getBoundingClientRect();
                    maxCursorX = cursorRect.left + (cursorRect.width / 2);

                    // Get the x position when the cursor is at max left
                    cursor.css('right', '');
                    cursor.css('left', '25%');
                    cursorRect = cursor[0].getBoundingClientRect();
                    minCursorX = cursorRect.left;

                    cursorCurrentX = minCursorX;

                    // Reset position to its current set or default value
                    cursor.css('left', current || (minCursorX / window.innerWidth * 100) + '%');
                }

                cursorCalibration();

                //-----------------------------------------------------------------------------

                //-----------------------------------------------------------------------------
                // NAVIGATION

                var navigation = angular.element(document.getElementById('sliderNavigation'));

                var cursorHalfSize = 20;    // check css
                var cursorSelected = false;

                function moveAllFromCursor(x) {
                    x = checkXRange(x);
                    moveCursor(x);
                    moveContainer(x * coeffA + coeffB);
                }

                function moveAllFromContainer(x) {
                    x = checkXRange((x - coeffB) / coeffA);
                    moveCursor(x);
                    moveContainer(x * coeffA + coeffB);
                }

                function checkXRange(x) {
                    if (x > maxCursorX) {
                        return maxCursorX;
                    }
                    if (x < minCursorX) {
                        return minCursorX;
                    }
                    return x;
                }

                function moveCursor(x) {
                    cursor.css('left', (x / window.innerWidth * 100) + '%');
                    cursorCurrentX = x;
                }

                function moveContainer(x) {
                    container.css('left', x + 'px');
                }

                cursor.on('mousedown', function() {
                    cursorSelected = true;
                });

                window.onmouseup = function() {
                    cursorSelected = false;
                };

                window.onmousemove = function(e) {
                    if (!cursorSelected) {
                        return;
                    }
                    moveAllFromCursor(e.x - cursorHalfSize);
                };

                navigation.on('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();

                    var animation = new TWEEN.Tween({x: cursorCurrentX})
                        .to({x: e.x - cursorHalfSize}, 600)
                        .easing(TWEEN.Easing.Linear.None)
                        .onUpdate(function() {
                            moveAllFromCursor(this.x);
                        });

                    animationService.put(animation);
                    animationService.animate();
                });

                //-----------------------------------------------------------------------------

                //-----------------------------------------------------------------------------
                // COMMON

                window.onresize = function() {
                    containerCalibration();
                    cursorCalibration();
                    ratioCalibration();
                };

                var coeffA = 0;
                var coeffB = 0;

                /**
                 * Resolve linear equation y = ax + b
                 */
                function ratioCalibration() {
                    coeffB = ((minContainerX * maxCursorX) + (-maxContainerX * minCursorX)) / (maxCursorX - minCursorX);
                    coeffA = (minContainerX - coeffB) / minCursorX;
                }

                ratioCalibration();

                //-----------------------------------------------------------------------------

                //-----------------------------------------------------------------------------
                // IMAGES

                var sliderModalImage = angular.element(document.getElementById('sliderModalImage'));

                function closeModal(e) {
                    e.stopPropagation();
                    e.preventDefault();

                    $scope.showFullView = false;
                    $document.unbind('click', closeModal);
                    $scope.$apply();
                }

                function centerContainer(image) {
                    var coords = image.getBoundingClientRect();
                    var start = container[0].getBoundingClientRect().left;
                    var move = (window.innerWidth / 2) - (coords.width / 2) - coords.left;

                    var animation = new TWEEN.Tween({x: start})
                        .to({x: start + move}, 600)
                        .easing(TWEEN.Easing.Linear.None)
                        .onUpdate(function() {
                            moveAllFromContainer(this.x);
                        });

                    animationService.put(animation);
                    animationService.animate();
                }

                $scope.$on('sliderImagesLoaded', function() {
                    console.log('allLoaded');
                });

                $scope.openPicture = function(e) {
                    e.stopPropagation();
                    e.preventDefault();

                    // Load the full image
                    sliderModalImage[0].src = $scope.imageDealer.getFull(this.idx);

                    // Center the slider on the current image
                    centerContainer(e.target);

                    // Open the full view
                    $scope.showFullView = true;

                    $document.bind('click', closeModal);

                    // Redraw the ng-repeat WTF ??
                };

                $scope.next = function(e) {
                    e.stopPropagation();
                    e.preventDefault();

                    sliderModalImage[0].src = $scope.imageDealer.next();
                    centerContainer(document.getElementById('sliderImg' + $scope.imageDealer.currentIndex));
                };

                $scope.previous = function(e) {
                    e.stopPropagation();
                    e.preventDefault();

                    sliderModalImage[0].src = $scope.imageDealer.previous();
                    centerContainer(document.getElementById('sliderImg' + $scope.imageDealer.currentIndex));
                };

                //-----------------------------------------------------------------------------
            }
        }
    };
});
