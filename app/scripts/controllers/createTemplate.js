/**
 * Created by yagnesh.modh on 4/13/2015.
 */
(function () {
  'use strict';

  angular.module('demotaskApp').controller('CreateTemplateCtrl', CreateTemplateCtrl);

  //CreateTemplateCtrl.$inject = ['$state','$stateParams'];

  function CreateTemplateCtrl() {
    var vm = this;
    vm.oneAtATime = false;
    vm.groups = [
      {
        title: 'Basic Listing Information',
        isOpen: true,
        content: [{
          name: 'Ship From Country',
          isSelected: true
        },
          {
            name: 'Ship From Zip Code',
            isSelected: true
          }]
      }
    ];
  }
})();
