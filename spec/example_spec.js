(function () {
  'use strict';

  var MainPage;
  MainPage = function () {

    this.appName = element(by.css('h3.text-muted'));
    this.tabRepeater = element.all(by.repeater('tab in vm.tabs'));
    this.tabNames = element.all(by.css('.nav-tabs li'));
    this.firstTab = element.all(by.css('[ng-click="select()"]')).get(0);
    this.secondTab = element.all(by.css('[ng-click="select()"]')).get(1);
    this.selectAll = element(by.css('[ng-click="vm.selectDeselect(true)"]'));
    this.deselectAll = element(by.css('[ng-click="vm.selectDeselect(false)"]'));
    this.checkBoxes = element.all(by.model('cntnt.isSelected'));
    this.searchTB = element.all(by.model('search'));
    this.matchText = element.all(by.css('ui-match'));

    this.get = function () {
      browser.get('http://localhost:9000/#/main');
    };

    this.fillSearch = function (search) {
      this.searchTB.sendKeys(search);
    }
  };


  describe('Application main page', function () {
    var mainPage;
    mainPage = new MainPage();
    beforeEach(function () {
      mainPage.get();
    });

    function displayAppName() {
      expect(mainPage.appName.getText()).toEqual('demotask');
    }

    function displayTab() {
      expect(mainPage.tabRepeater.count()).toEqual(2);
    }

    function TabName() {
      var tabs = mainPage.tabNames.map(function (elm, index) {
        return {
          index: index,
          text: elm.getAttribute('heading'),
          state: elm.getAttribute('href')
        };
      });
      expect(tabs).toEqual([
        {index: 0, text: 'Create Template', state: '#/main'},
        {index: 1, text: 'New Template', state: '#/main/newTemplate'}
      ]);
    }


    function selectAll() {
      mainPage.selectAll.click()
        .then(function () {
          mainPage.checkBoxes.each(function (element, index) {
            expect(element.isSelected()).toBeTruthy();
          })
        });
    }

    function deselectAll() {
      mainPage.deselectAll.click()
        .then(function () {
          mainPage.checkBoxes.each(function (element, index) {
            expect(element.isSelected()).toBeFalsy();
          })
        });
    }


    function clickFirstTab() {
      mainPage.firstTab.click()
        .then(function () {
          browser.waitForAngular();
          expect(browser.getCurrentUrl()).toContain('#/main');
        });
    }

    function clickSecondTab() {
      mainPage.secondTab.click()
        .then(function () {
          browser.waitForAngular();
          expect(browser.getCurrentUrl()).toContain('#/main/newTemplate');
        });
    }

    function searchResult() {
      mainPage.fillSearch('ship');
      expect(mainPage.checkBoxes.count()).toBe(2);
      mainPage.matchText.each(function (element,index) {
        expect(element.getText()).toMatch('ship');
      });
    }

    it('should display the application name', displayAppName);

    it('should display the tab', displayTab);

    it('should display the tab name', TabName);

    it('should select all checkbox', selectAll);

    it('should deselect all checkbox', deselectAll);

    it('should click on first tab', clickFirstTab);

    it('should click on second tab', clickSecondTab);

    it('should search result', searchResult);

  });


})();



