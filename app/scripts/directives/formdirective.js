/**
 * @ngdoc directive
 * @name demotaskApp.directive:formDirective
 * @description
 * # formDirective
 */

(function () {
  'use strict';

  function FormController(myService) {
    var vm = this;
    vm.content = myService.getContentDetails();
  }

  FormController.$inject = ['myService'];

  function formDirective($compile) {

    function link(scope, element, attrs, vm) {

      var el = null;
      _.each(vm.content, function (content) {
        switch (content.AttachedElement.attributes.type) {
          case 'text':
            el = angular.element('<text-directive name=' + content.AttachedElement.attributes.name + ' show=' + content.isSelected + ' />');
            break;
          case 'password':
            el = angular.element('<text-directive name=' + content.AttachedElement.attributes.name + ' show=' + content.isSelected + ' />');
            break;
        }
        $compile(el)(scope);
        element.append(el);
      });
    }

    var directive = {
      restrict: 'E',
      template: '<form role="form"></form>',
      replace: 'true',
      link: link,
      controller: FormController,
      controllerAs: 'vm',
      bindToController: true // because the scope is isolated
    };

    return directive;
  }

  formDirective.$inject = ['$compile'];

  angular
    .module('demotaskApp')
    .directive('formDirective', formDirective);

})();
