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


// Example usage. Put this in one of your controllers and require the $modal

	var modalInstance = $modal.open({
		templateUrl: '/app/components/modal-alert/modal-alert.html',
		controller: 'ModalAlertCtrl',
		size: 'sm',
		resolve: {
			text: function () {
				return 'Are you sure you want to delete this feedback?'
			}
		}
	});

	modalInstance.result.then(function () {
		//modal ok button clicked
	}, function () {
		//modal cancel button clicked
	});