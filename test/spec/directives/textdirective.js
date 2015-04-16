'use strict';

describe('Directive: textDirective', function () {

  // load the directive's module
  beforeEach(module('demotaskApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  //it('should make hidden element visible', inject(function ($compile) {
  //  element = angular.element('<text-directive></text-directive>');
  //  element = $compile(element)(scope);
  //  expect(element.text()).toBe('this is the textDirective directive');
  //}));
});
