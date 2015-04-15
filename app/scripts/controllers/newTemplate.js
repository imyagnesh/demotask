(function () {
  'use strict';

  function NewTemplateCtrl($scope, myService) {
    $scope.groups = myService.getAllGroupData();
  }

  angular.module('demotaskApp').controller('NewTemplateCtrl', NewTemplateCtrl);

  NewTemplateCtrl.$inject = ['$scope', 'myService'];


})();
