(function () {
  'use strict';

  function textDirective() {

    function link(scope, element, attrs) {
      /* */
    }

    var directive = {
      link: link,
      template: '<div class="form-group" ng-show="{{  }}">' +
      '<label for="inputEmail3" class="col-sm-2 control-label">Email</label>' +
      '<div class="col-sm-10">' +
      '<input type="email" class="form-control" id="inputEmail3" placeholder="Email">' +
      '</div>' +
      '</div>',
      restrict: 'AE',
      replace: 'true'
    };

    return directive;
  }

  angular
    .module('demotaskApp')
    .directive('textDirective', textDirective);
})();
