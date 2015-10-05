'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fruitStandKataRobApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl as main', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it ('should have a list of 3 fruits to choose from', function () {
    expect(scope.main.fruitChoices.length).toBe(3);
  });

  it('should have 3 fruit names to use', function() {
    expect(scope.main.fruitNames.length).toBe(3);
  });

  it ('should give fruit prices by type of fruit', function () {
    expect(scope.main.priceCalc('limes', 1)).toEqual(0.6);
    expect(scope.main.priceCalc('limes', 2)).toEqual(0.5);
    expect(scope.main.priceCalc('apples', 1)).toEqual(0.9);
    expect(scope.main.priceCalc('bananas', 1)).toEqual(0.39);
  });

  it('should check the priceCalc method', function() {
    spyOn(scope.main, 'priceCalc');  
  });

  it('should check the addToCart method', function () {
    spyOn(scope.main, 'addToCart');
  }); 

});
