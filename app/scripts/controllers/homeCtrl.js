'use strict';

angular.module('Gallery').controller('homeCtrl', function($scope, $filter, ImageDealer) {
    var maxPerList = 10;

    var pictureDealer = new ImageDealer('pictures', 'card', maxPerList);
    var collageDealer = new ImageDealer('collages', 'card', maxPerList);
    var drawingDealer = new ImageDealer('drawings', 'card', maxPerList);

    $scope.images = $filter('shuffle')(pictureDealer.random().concat(collageDealer.random()).concat(drawingDealer.random()));
});
