var app = angular.module('phoneApp', []);
app.controller("AppCtrl", function($scope) {
    $scope.callHome = function(message) {
        alert(message);
    };
});

app.directive('phone', function() {
    return {
        scope: {
            dial: "&"
        },
        template: '<div class="button" ng-click="dial()">Call Home!</div>'
    }
});
