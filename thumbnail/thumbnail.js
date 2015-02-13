APP_MODULE
	.directive('thumbnail', function () {
		return {
			replace: true,
			scope: {
				delete: '&',
				thumbnail: '='
			},
			templateUrl: "/app/components/thumbnail/thumbnail.html",
			link: function(scope, elem, attrs) {

				scope.deleteThumbnail = function(){
					scope.delete();
				}
			}
		}
	});

