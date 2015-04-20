(function () {


  'use strict';

  function myService($q) {

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
      var deferred = $q.defer();
      var success = true;
      if (success) {
        deferred.resolve(groupData);
      }
      else {
        deferred.reject('Data is not available');
      }

      return deferred.promise;
    }

    function selectDeselectAll(data) {
      for (var i = groupData.length - 1; i >= 0; i--) {
        for (var j = groupData[i].content.length - 1; j >= 0; j--) {
          groupData[i].content[j].isSelected = data;
        }
      }
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


  myService.$inject = ['$q'];

})();




