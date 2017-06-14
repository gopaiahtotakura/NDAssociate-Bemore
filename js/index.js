(function() {
  'use strict';

  angular
    .module('myApp', [])
    .controller('profileController', profileController)
    .directive('starRating', starRating);

  function profileController() {
    this.rating1 = 2;
    this.ratingbox1 = 2;
      this.ratingbox2 = 1;
      this.ratingbox3 = 3;
      this.ratingbox4 = 4;
      this.ratingimg1 = 1;
       this.ratingimg2 = 1;
       this.ratingimg3 = 1;
       this.ratingimg4 = 1;
       this.ratingimg5 = 1;
       this.ratingimg6 = 1;
      this.ratingprofile1 = 3;
       this.ratingprofile2 = 2;
    this.rateFunction = function(rating) {
      console.log('Rating selected: ' + rating);
    };
  }

  function starRating() {
    return {
      restrict: 'EA',
      template:
        '<ul class="star-rating"' +
        '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
        '    <i class="fa fa-star "></i>' + // or &#9733
        '  </li>' +
        '</ul>',
      scope: {
        ratingValue: '=ngModel',
        max: '=?', // optional (default is 5)
        onRatingSelect: '&?',
        readonly: '=?'
      },
      link: function(scope, element, attributes) {
        if (scope.max == undefined) {
          scope.max = 5;
        }
        function updateStars() {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled: i < scope.ratingValue
            });
          }
        };
        scope.toggle = function(index) {
          
            scope.ratingValue = index + 1;
            scope.onRatingSelect({
              rating: index + 1
            });
        
        };
        scope.$watch('ratingValue', function(oldValue, newValue) {
          if (newValue || newValue === 0) {
            updateStars();
          }
        });
      }
    };
  }
})();