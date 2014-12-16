APP_MODULE
	.directive('customRadio', [function () {

		return {
			restrict: 'A',
			replace: true,
			scope: {
				model: '=',
				label: '@',
				name: "@",
				value: "@"
			},
			template: '<div class="custom-radio">' +
				'<label>' +
					'<div class="circle">' +
						'<i class="fa fa-circle" ng-show="model === value"></i>' +
						'<input type="radio" ng-model="model" name="{{name}}" value="{{value}}" />' +
					'</div> {{label}}' +
				'</label>' +
			'</div>'
		}

	}]);