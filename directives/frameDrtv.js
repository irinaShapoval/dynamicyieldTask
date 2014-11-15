(function(angular) {
var frameDrtv = function(framesService, $timeout, $compile) {
	return {
        controller: function ($scope) {},
        replace: true,
		link: function (scope, element, attrs) {
            var $sendBtn;
            var $iframe = framesService.initFrameHTML();

            $iframe.appendTo(element);

            $iframe[0].onload = function () {
                var $content = $iframe.contents();
                $sendBtn = $content.find('button');
                $sendBtn.on('click', sendMsgHandler);

                function sendMsgHandler (event) {
                    var $input = $content.find('input');
                    var msg = $input.val();
                    if (!msg) return;
                    $input.val('');
                    var win = document.getElementsByClassName('parent-frame')[0].contentWindow;
                    win.postMessage('<span class="sender">[frame-' + element.attr('data-num') + ']: </span><span class="text">' + msg + '</span>', '*');
                }
            };
		}
	}
};
angular.module('framesApp').directive('frameDrtv', ['framesService', '$timeout', '$compile', frameDrtv])
}(angular));