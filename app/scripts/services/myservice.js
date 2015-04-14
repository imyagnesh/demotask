
    'use strict';

  function myService() {

    var groupData = [
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

    function getAllGroupData() {
      return groupData;
    }

    function selectDeselectAll(data) {
      _.each(groupData, function (grp) {
        _.each(grp.content, function (cntnt) {
          cntnt.isSelected = data;
        });
      });
    }

    var service = {
      getAllGroupData: getAllGroupData,
      selectDeselectAll: selectDeselectAll
    };

    return service;
  }

    angular
        .module('demotaskApp')
        .factory('myService', myService);



