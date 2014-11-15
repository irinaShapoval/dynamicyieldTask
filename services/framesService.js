/**
 * Created by irina on 11/14/2014.
 */
(function (angular) {
    var framesService = function () {
        this.initFrame = function (num) {
            var $frameDiv = $('<div frame-drtv data-num=' + num + '></div>');
            return $frameDiv;
        };
        this.initFrameHTML = function () {
            var $iframe = $('<iframe />');
            $iframe.attr('src', 'frameView.html');
            $iframe.addClass('frame child-frame');
            return $iframe;
        };
    };
    angular.module('framesApp').service('framesService', [framesService])
}(angular));