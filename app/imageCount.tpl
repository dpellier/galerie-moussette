'use strict';

angular.module('Gallery').constant('ImageCount', (function() {
    return {
        collages: {
            card: <%= collages.card %>,
            full: <%= collages.full %>,
            slider: <%= collages.slider %>
        },
        drawings: {
            card: <%= drawings.card %>,
            full: <%= drawings.full %>,
            slider: <%= drawings.slider %>
        },
        pictures: {
            card: <%= pictures.card %>,
            full: <%= pictures.full %>,
            slider: <%= pictures.slider %>
        }
    };
})());
