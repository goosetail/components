APP_MODULE
	.directive('backgroundImg', function(){
		return function(scope, element, attrs){
			attrs.$observe('backgroundImg', function(value) {
				element.css({
					'background-image': 'url(' + value +')',
					'background-size' : 'cover'
				});
			});
		};
	});