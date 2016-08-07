function FunCtrl() {
  var self = this;

  self.start = function() {
    console.log("Fun times have been started!");
  }

  self.end = function() {
      console.log("OVER!");
  }

};


angular.module('coolApp', [])
.controller('FunCtrl', FunCtrl)
.directive("entering", function(){
 return function(scope, element, attrs) {
      element.bind("mouseenter", function(){
        scope.$apply(attrs.entering);
      })
    }
})
.directive("leaving", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            scope.$apply(attrs.leaving);
        })
    }
});
