APP_MODULE
	.directive('focus', function () {
		return {
			link: function(scope, element, attrs) {
				var focus = attrs.focus;
				scope.$watch(focus, function (value) {
					if (value == true) {
						setTimeout(function(){
							element.focus();
						}, 0)
					}
				});
			}
		}
	});