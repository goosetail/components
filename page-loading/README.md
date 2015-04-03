Page Loading
================

A directive that shows a loading spinner.

Example usage:

    // in your app.jade file (or another template that is rendered on every page view)
    .component(page-loading)

    // in your angular .run() block

    $rootScope.$on("showPageLoading", showLoading);
    $rootScope.$on("hidePageLoading", hideLoading);

    function showLoading() {
        $rootScope.showPageLoading = true;
    }

    function hideLoading() {
        $rootScope.showPageLoading = false;
    }
