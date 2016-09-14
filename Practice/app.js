angular.module('app', [])
.config(function() {
    console.log('Config Reached');
})
.controller('Ctrl', function($scope, $timeout, $http) {
    var ctr = 0;
    var make_request = function() {
        $http({
            url: 'http://google.com',
            method: 'GET'
        }).success(console.log("GET request success!"));
    };
    
})
