Modal Alert
============

A directive that puts up small and simple modal alerts. You can customize alert text and pass functions for handling
accept or dismissal

Example Usage:

 Put this in one of your controllers and require the $modal service

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

