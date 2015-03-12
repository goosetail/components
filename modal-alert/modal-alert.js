APP_MODULE
	.controller('ModalAlertCtrl', [
    '$scope',
		'$modalInstance',
		'text',
    function ($scope, $modalInstance, text) {
	    $scope.text = text;

	    $scope.ok = function () {
		    $modalInstance.close();
	    };

	    $scope.cancel = function () {
		    $modalInstance.dismiss('cancel');
	    };

    }
	]);


