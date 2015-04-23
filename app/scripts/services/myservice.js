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
              'id': 'userName',
              'type': 'text',
              'ng-model': '',
              'name': 'userName',
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
                'id': 'password',
                'type': 'password',
                'ng-model': '',
                'name': 'password',
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

    function getContentDetails() {
      return _.flatten(_.pluck(groupData, 'content'));
    }

    function getContentFromName(name) {
      var content = _.flatten(_.pluck(groupData, 'content'));
      return _.filter(content, function(item){
        return item.AttachedElement.attributes.name === name;
      });
    }

    var service = {
      getAllGroupData: getAllGroupData,
      selectDeselectAll: selectDeselectAll,
      getContentDetails: getContentDetails,
      getContentFromName: getContentFromName
    };

    return service;
  }

  angular
    .module('demotaskApp')
    .factory('myService', myService);


  myService.$inject = ['$q'];

})();




