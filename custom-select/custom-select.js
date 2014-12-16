APP_MODULE
	.directive('customSelect', [function () {

		return {
			restrict: 'A',
			replace: true,
			scope: {
				model: '=',
				change: "&",
				options: '=',
				defaultText: '@'
			},
			template: '<div class="custom-select-wrapper">' +
				'<div class="custom-select">' +
					'<div class="custom-value clearfix">' +
						'<i class="fa fa-sort-desc"></i>' +
						'<span class="display-label"></span>' +
						'<select ng-model="model" ng-change="change()" ng-options="o.value as o.label for o in options">' +
							'<option value="">{{defaultText}}</option>' +
						'</select>' +
					'</div>' +
				'</div>' +
			'</div>',
			link: function (scope, element) {

				var display = element.find('.display-label');
				var select = element.find('select');

				function updateLabel () {

					display.text(select.find('option:selected').text());

				}

				scope.$watch('model', updateLabel);
				scope.$watch('options', updateLabel);

			}
		}
	}]);