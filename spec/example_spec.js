(function () {
  'use strict';

  describe('demotask app', function () {

    describe('Application main page', function () {

      beforeEach(function () {
        browser.get('http://localhost:9000/#/main');
      });

      function displayAppName() {
        var appName = element(by.css('h3.text-muted')); //using the CSS selector
        expect(appName.getText()).toEqual('demotask');
      }

      function displayTab() {
        var rows = element.all(by.repeater('tab in vm.tabs'));
        expect(rows.count()).toEqual(2);
      }

      function TabName() {
        var tabs = element.all(by.css('.nav-tabs li')).map(function (elm, index) {
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

      function clickFirstTab() {
        element.all(by.css('[ng-click="select()"]')).get(0).click()
          .then(function () {
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('#/main');
          });
      }

      function clickSecondTab() {
        element.all(by.css('[ng-click="select()"]')).get(1).click()
          .then(function () {
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('#/main/newTemplate');
          });
      }

      function selectAll(){
        element(by.css('[vm.selectDeselect(true)"]')).click()
          .then(function () {
            var rows = element.all(by.repeater('cntnt in group.content'));
            rows.each(function (element, index) {
              expect(rows(index).column('cntnt.isSelected')).toMatch('true');
            })
          });
      }

      function deselectAll(){
        element(by.css('[vm.selectDeselect(false)"]')).click()
          .then(function () {
            var rows = element.all(by.repeater('cntnt in group.content'));
            rows.each(function (element, index) {
              expect(rows(index).column('cntnt.isSelected')).toMatch('false');
            })
          });
      }

      it('should display the application name', displayAppName);

      it('should display the tab', displayTab);

      it('should display the tab name', TabName);

      it('should click on first tab', clickFirstTab);

      it('should click on second tab', clickSecondTab);

      it('should select all checkbox', selectAll);

      it('should deselect all checkbox',deselectAll)

    });

  });

})();



