var app = angular.module('superApp', []);

app.directive("superhero", [function() {
    return {
        restrict: 'E',

        controller: ['$scope', function($scope) {
            $scope.abilities = [];

            this.addStrength = function() {
                $scope.abilities.push('strength');
            };

            this.addSpeed = function() {
                $scope.abilities.push('speed');
            };

            this.addFlight = function() {
                $scope.abilities.push('flight');
            };
        }],

        link: function(scope, element, attrs) {
            element.bind('mouseenter', function() {
                console.log(scope.abilities);
            })
        }
    };
}]);

app.directive('strength', [function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, supreheroCtrl) {
            supreheroCtrl.addStrength();
        }
    };
}]);

app.directive('speed', [function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, supreheroCtrl) {
            supreheroCtrl.addSpeed();
        }
    };
}]);

app.directive('flight', [function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, supreheroCtrl) {
            supreheroCtrl.addFlight();
        }
    };
}]);
