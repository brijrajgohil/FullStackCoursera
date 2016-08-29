angular.module('docsIsoFnBindExample', [])
.controller('Controller', ['$scope', function($scope) {
    $scope.name = 'Tobias';
    $scope.message = '';
    $scope.hideDialog = function() {
        $scope.message = message;
        $scope.dialogIsHidden = true;
        $timeout(function () {
            $scope.message = '';
            $scope.dialogIsHidden = false;
        }, 2000);
    }
}])
.directive('myDialog', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            'close': '&onClose'
        },
        templateUrl: 'my-customer-iso.html'
    };
});
