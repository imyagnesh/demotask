'use strict';

function myService() {

  var groupData = [
    {
      title: 'Basic Listing Information',
      isOpen: true,
      content: [{
        name: 'Ship From Country',
        isSelected: true,
        AttachedElement: {
          element: 'input',
          label: 'User Name',
          attributes: {
            'type': 'text',
            'ng-model': '',
            'name': '',
            'required': '',
            'ng-required': 'true',
            'ng-minlength': '',
            'Placeholder': 'User Name',
            'class': 'form-control'
          }
        }
      },
        {
          name: 'Ship From Zip Code',
          isSelected: true,
          AttachedElement: {
            element: 'input',
            label: 'Password',
            attributes: {
              'type': 'password',
              'ng-model': '',
              'name': '',
              'required': '',
              'ng-required': 'true',
              'ng-minlength': '',
              'Placeholder': 'Password',
              'class': 'form-control'
            }
          }
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



