APP_MODULE
	.directive('saved', ['$timeout', function ($timeout) {
		return {
			transclude: true,
			scope: {
				success: '=',
				showOnLeft: '='
			},
			templateUrl: "/app/components/saved/saved.html",
			link: function(scope, elem, attrs) {
				scope.$watch('success', function(success){
					if(success){

						var savedCheck = elem.find('.fa.fa-check');
						savedCheck.addClass('fading');

						$timeout(function(){
							savedCheck.removeClass('fading');
						}, 500);

						$timeout(function(){
							scope.success = false;
						}, 1200)
					}

				})
			}
		}
	}]
);