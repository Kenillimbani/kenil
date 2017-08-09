angular.module('Foodees')
  .directive('aside', [function ($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
            offsetTop = element.offset().top; // get element's offset top relative to document

        $win.on('scroll', function (e) {
          if ($win.scrollTop() >= offsetTop) {
            console.log("offsetTop");
            console.log(offsetTop);
            console.log("$win.scrollTop()");
            console.log($win.scrollTop());

            //element.addClass(topClass);
          } else {
            //element.removeClass(topClass);
          }
        });
      }
    };
}])  
.directive('compile', ['$compile', function ($compile) {
  return function(scope, element, attrs) {
      scope.$watch(
        function(scope) {
          return scope.$eval(attrs.compile);
        },
        function(value) {
          element.html(value);
          $compile(element.contents())(scope);
        }
      )};
}]);