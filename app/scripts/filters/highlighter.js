(function () {
  'use strict';

  function highlighter($sce) {
    function highlightText(input, phrase) {
      if (phrase) {
        var highlighted = 'highlighted';
        input = input.replace(new RegExp('(' + phrase + ')', 'gi'),
          '<span class='+ highlighted +'>$1</span>');
      }
      return $sce.trustAsHtml(input);
    }

    return highlightText;
  }

  angular.module('demotaskApp').filter('highlighter', highlighter);
  highlighter.$inject = ['$sce'];
})();
