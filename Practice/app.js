var app = angular.module('app', ['ngAnimate']);


app.directive('dumbPassword', [function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'dumbpass.html',
        link: function(scope, element) {
            scope.$watch('model.input', function(value) {
                if(value === 'password') {
                    element.children(1).toggleClass('alert-box alert');
                }
            });
        }
    };
}]);
