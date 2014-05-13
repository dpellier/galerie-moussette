'use strict';

angular.module('Gallery').factory('ImageDealer', function(ImageCount) {
    var ImageDealer = function(type, size, max) {
        this.type = type;
        this.size = size;
        this.max = max;
    };

    function makeUri(type, size, index) {
        return 'images/' + type + '/' + size + '/' + index + '.jpg';
    }

    ImageDealer.prototype.get = function(index) {
        return makeUri(this.type, this.size, index);
    };

    ImageDealer.prototype.getFull = function(index) {
        this.currentIndex = index;
        return makeUri(this.type, 'full', index);
    };

    ImageDealer.prototype.next = function(index) {
        index = index || this.currentIndex;

        if (++index > this.max) {
            index = 0;
        }
        return this.getFull(index);
    };

    ImageDealer.prototype.previous = function(index) {
        index = index || this.currentIndex;

        if (--index < 0) {
            index = this.max;
        }
        return this.getFull(index);
    };

    ImageDealer.prototype.random = function() {
        var start = Math.abs(Math.floor(Math.random() * (ImageCount[this.type][this.size] - this.max)));
        var res = [];

        for (var i = start; i < start + this.max; i++) {
            res.push(makeUri(this.type, this.size, i));
        }
        return res;
    };

    return ImageDealer;
});
