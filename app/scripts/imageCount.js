'use strict';

angular.module('Gallery').constant('ImageCount', (function() {
    return {
        collages: {
            card: 0,
            full: 0,
            slider: 0
        },
        drawings: {
            card: 0,
            full: 0,
            slider: 0
        },
        pictures: {
            card: 0,
            full: 101,
            slider: 101
        }
    };
})());
