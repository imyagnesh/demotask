/**
 * Created by yagnesh.modh on 4/13/2015.
 */
(function () {
  'use strict';

  function CreateTemplateCtrl(myService) {
    var vm = this;

    function getAllGroupSuccess(data) {
      vm.groups = data;
    }

    function getAllGroupError(reason) {
      console.log(reason);
    }

    myService.getAllGroupData()
      .then(getAllGroupSuccess, getAllGroupError);
      //.catch(catchblock)
      //.finally(finallyblock);



    vm.selectDeselect = myService.selectDeselectAll;

    vm.oneAtATime = false;

  }

  angular.module('demotaskApp').controller('CreateTemplateCtrl', CreateTemplateCtrl);

  CreateTemplateCtrl.$inject = ['myService'];

})();
