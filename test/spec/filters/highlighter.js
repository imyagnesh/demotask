'use strict';

describe('Filter: highlighter', function () {

  // load the filter's module
  beforeEach(module('demotaskApp'));

  // initialize a new instance of the filter before each test
  var highlighter;
  beforeEach(inject(function ($filter) {
    highlighter = $filter('highlighter');
  }));

  it('should return the input prefixed with "highlighter filter:"', function () {
    var text = 'angularjs';
    expect(highlighter(text)).toBe('highlighter filter: ' + text);
  });

});
