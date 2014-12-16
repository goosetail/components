APP_MODULE
	.directive('customCheckbox', [function () {

		return {
			restrict: 'A',
			replace: true,
			scope: {
				model: '=',
				label: '@'
			},
			template: '<div class="custom-checkbox">' +
				'<label>' +
					'<div class="box">' +
						'<i class="fa fa-check" ng-show="model"></i>' +
						'<input type="checkbox" ng-model="model" />' +
					'</div> {{label}}' +
				'</label>' +
			'</div>'
		}

	}]);