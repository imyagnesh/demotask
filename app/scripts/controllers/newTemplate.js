(function () {
  'use strict';

  function NewTemplateCtrl(myService) {
    var vm = this;
    vm.groups = myService;
  }

  angular.module('demotaskApp').controller('NewTemplateCtrl', NewTemplateCtrl);

  NewTemplateCtrl.$inject = ['myService'];


})();
