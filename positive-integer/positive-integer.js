// Directive that makes sure an input element is a positive, whole number.
// Anything else will throw an error accessible with scope.[formName].[inputName].$error.positiveInteger

APP_MODULE.directive('positiveInteger', function (){
	return {
		require: 'ngModel',
		link: function(scope, elem, attr, ngModel) {

			//For DOM -> model validation
			ngModel.$parsers.unshift(function(value) {

				var valid = checkValue(value);

				ngModel.$setValidity('positiveInteger', valid);
				return valid ? value : undefined;
			});

			//For model -> DOM validation
			ngModel.$formatters.unshift(function(value) {
				ngModel.$setValidity('positiveInteger', checkValue(value));
				return value;
			});

			function checkValue(val) {
				return val > 0 && !isNaN(val) && val % 1 == 0
			}
		}
	};
});