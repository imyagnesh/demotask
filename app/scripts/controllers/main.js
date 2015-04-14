(function () {
  'use strict';

  function MainCtrl($state) {
    var vm = this;

    vm.tabs = [
      {text: 'Create Template', state: 'main.createTemplate'},
      {text: 'New Template', state: 'main.newTemplate'}
    ];

    $state.go('main.createTemplate');

    function activate() {
      _.each(vm.tabs, function (tab) {
        tab.active = ($state.current.name === tab.state);
      });
    }

    activate();


  }

  angular.module('demotaskApp').controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$state'];


})();
