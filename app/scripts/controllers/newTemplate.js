(function () {
  'use strict';

  function NewTemplateCtrl($scope,myService) {
    var vm = this;
    $scope.groups = myService.getAllGroupData();
  }

  angular.module('demotaskApp').controller('NewTemplateCtrl', NewTemplateCtrl);

  NewTemplateCtrl.$inject = ['$scope','myService'];


})();
