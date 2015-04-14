'use strict';

/**
 * @ngdoc filter
 * @name demotaskApp.filter:highlighter
 * @function
 * @description
 * # highlighter
 * Filter in the demotaskApp.
 */
angular.module('demotaskApp')
  .filter('highlighter', function ($sce) {
    return function (input, phrase) {
      if (phrase) input = input.replace(new RegExp('(' + phrase + ')', 'gi'),
        '<span class="highlighted">$1</span>');
      return $sce.trustAsHtml(input);
    };
  });
