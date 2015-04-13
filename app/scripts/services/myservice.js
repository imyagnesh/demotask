(function () {
    'use strict';

    angular
        .module('demotaskApp')
        .factory('myService', myService);


    function myService() {

        var service = {
            getAllGroupData: getAllGroupData,
            selectDeselect: selectDeselectAll
        };

        return service;

        function getAllGroupData() {
            return [
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

        function selectDeselectAll(data) {
            _.each(groupData.content, function (cntnt) {
                cntnt.isSelected = data;
            });
        }
    }
});
