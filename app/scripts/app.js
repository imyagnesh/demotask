(function(){

  'use strict';

  var app = angular.module('demotaskApp', [
    'ngResource',
    //3rd party modules
    'ui.bootstrap',
    'ui.router',

  ]);

  function configRoutes($stateProvider,$urlRouterProvider)
  {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/main');
    //
    // Now set up the states
    $stateProvider
      .state('main',{
        url:'/main',
        templateUrl:'views/main.html',
        controller:'MainCtrl',
        controllerAs:'vm'
      })
      .state('main.createTemplate',
      {
        url:'/createTemplate',
        views:{
          'tabContent':{
            templateUrl:'views/createTemplate.html',
            controller:'CreateTemplateCtrl',
            controllerAs:'vm'
          }
        }
      })
      .state('main.newTemplate',
      {
        url:'/newTemplate',
        views:{
          'tabContent':{
            templateUrl:'views/newTemplate.html',
            controller:'NewTemplateCtrl'
          }
        }
      });

  }

  app.config(['$stateProvider','$urlRouterProvider',configRoutes]);




})();






