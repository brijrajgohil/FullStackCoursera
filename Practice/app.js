var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app.html',
        controller: 'ViewCtrl',
    })
    .when('/new', {
        templateUrl: 'new.html',
        controller: 'NewCtrl',
        resolve: {
            loadData: viewCtrl.loadData
        }
    })
}]);

app.controller('AppCtrl', ['$scope', '$rootScope', '$route', '$location', function($scope, $rootScope, $route, $location) {
    $rootScope.$on("$routeChangeStart", function(event, current, previous) {
        console.log($scope, $rootScope, $route, $location);
    })

    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
        console.log($scope, $rootScope, $route, $location);
    })
}]);

var viewCtrl = app.controller('ViewCtrl', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    $scope.changeRoute = function() {
        console.log($scope);
        $location.path('/new');
    }
}]);

app.controller('NewCtrl', ['$scope', 'loadData', '$template', function($scope, $loadData, $template) {
    console.log($scope, loadData, $template);
}])

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve({message: "Success!"});
    }, 1000);
    return defer.promise;
};
