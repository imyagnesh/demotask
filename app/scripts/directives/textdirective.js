(function () {
  'use strict';

  function TextController(myService) {
    var vm = this;
    vm.content = myService.getContentFromName(vm.name);
  }

  TextController.$inject = ['myService'];

  function textDirective($compile) {

    function link(scope, element, attrs, vm) {

      var el = null;
      el = angular.element('<label for="{{ vm.content[0].AttachedElement.attributes.id }}">{{ vm.content[0].AttachedElement.label }}</label>');

      var text = null;
      text = angular.element('<input/>');
      _.forIn(vm.content[0].AttachedElement.attributes, function (value, key) {
        if (value.length > 0) {
          text.attr(key, value);
        }
      });

      el.append(text);

      console.log(el);

      $compile(el)(scope);
      element.append(el);

    }

    var directive = {
      restrict: 'EA',
      template: '<div class="form-group" ng-show="{{ vm.show }}"></div>',
      replace: 'true',
      link: link,
      scope: {
        name: '@',
        show: '@'
      },
      controller: TextController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  textDirective.$inject = ['$compile'];

  angular
    .module('demotaskApp')
    .directive('textDirective', textDirective);

})();
