/**
 * Created by yagnesh.modh on 4/13/2015.
 */
(function () {
  'use strict';

  function CreateTemplateCtrl($scope,myService) {
    var vm = this;
    vm.oneAtATime = false;
    vm.groups = myService.getAllGroupData();
    $scope.selectAll = function(item) {
      myService.selectDeselectAll(item);
    }
  }

  angular.module('demotaskApp').controller('CreateTemplateCtrl', CreateTemplateCtrl);

  CreateTemplateCtrl.$inject = ['$scope','myService'];

})();
