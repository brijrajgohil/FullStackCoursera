angular.module('myApp', [])
.factory('Data', function() {
    return {
        message: "Hello"
    }
})
.filter('reverse', function() {
    return function(text) {
        return text.split("").reverse().join("");
    }
})
.controller('FirstCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
}])
.controller('SecondCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
}]);
