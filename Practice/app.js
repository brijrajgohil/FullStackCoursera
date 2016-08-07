angular.module('greetings', [])
.directive('welcome', function () {
    return {
        restrict: 'E',
        template: "<div><h1>Welcome</h1></div>"
    }
});
