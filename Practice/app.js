angular.module('greetings', [])
.directive('welcome', function () {
    restrict: 'E',
    template: "<div><h1>Welcome</h1></div>"
});
