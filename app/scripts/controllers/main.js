(function () {
    'use strict';

    angular.module('demotaskApp').controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$state'];

    function MainCtrl($state) {
        var vm = this;

        vm.tabs = [
            {text: 'Create Template', state: 'main.createTemplate'},
            {text: 'New Template', state: 'main.newTemplate'}
        ];

        activate();

        function activate() {
            angular.forEach(vm.tabs, function (tab) {
                tab.active = ($state.current.name === tab.state);
            });
        }
    }
})();