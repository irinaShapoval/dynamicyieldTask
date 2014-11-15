(function(angular) {
var framesCtrl = function ($scope, $compile, framesService) {
    $scope.framesArr = [];
    var $parentFrame = $('.parent-frame').attr('src', 'views/parentFrameView');
    var $frames;

    $parentFrame[0].onload = function () {
        $frames = $parentFrame.contents().find('.frames');
    };
    $scope.add = function () {
        var iframeDiv = framesService.initFrame($scope.framesArr.length);
        iframeDiv.appendTo($frames);
        $compile(iframeDiv)($scope);
        $scope.framesArr.push(iframeDiv);
    };
};
angular.module('framesApp').controller('framesCtrl', ['$scope', '$compile', 'framesService', framesCtrl])
})(angular);