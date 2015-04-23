'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('demotaskApp'));

  var MainCtrl;
  var state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $state) {
    state = $state;
    MainCtrl = $controller('MainCtrl', {
      $state: {}
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(state.current.name).toBe('main.createTemplate');
  //});
});
