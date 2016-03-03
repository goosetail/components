APP_MODULE
	.directive('countryStateSelect', function () {
		return {
			restrict: 'A',
			templateUrl: "/app/components/country-state-select/country-state-select.html",
			controller: 'CountryStateSelectCtrl',
			replace: true,
			scope: {
				model: '='
			}
		}
	})
	.controller('CountryStateSelectCtrl', ['$scope', '$http', function ($scope, $http) {

		$http.get('/app/components/country-state-select/country-state-select.json').success(function (map) {

			$scope.countries = map;

		});

		$scope.getStates = function () {

			if ($scope.model && $scope.model.country && $scope.countries) {
				return _.find($scope.countries, {country: $scope.model.country}).states;
			}

			return [];

		};

	}]);