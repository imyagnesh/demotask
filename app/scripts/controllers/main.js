(function () {
  'use strict';

  function MainCtrl($state) {
    var vm = this;

    vm.tabs = [
      {text: 'Create Template', state: 'main.createTemplate'},
      {text: 'New Template', state: 'main.newTemplate'}
    ];

    function activate() {
      //var tabIndex = _.findIndex(vm.tabs, 'state', $state.current.name);
      //if(tabIndex !== -1)
      //  vm.tabs[tabIndex].active = true;

      //for (var i = vm.tabs.length - 1; i >= 0; i--) {
      //  vm.tabs[i].active = ($state.current.name === vm.tabs[i].state)
      //}

      var i = vm.tabs.length;
      while (i--) {
        vm.tabs[i].active = ($state.current.name === vm.tabs[i].state);
      }

      //_.each(vm.tabs, function (tab) {
      //  tab.active = ($state.current.name === tab.state);
      //});
    }

    activate();

  }

  angular.module('demotaskApp').controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$state'];

})();
