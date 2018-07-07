module.exports = {
  'Test reservation management loads' : function (browser) {
    browser
      .url(browser.globals.development.root_url + '/reservation')
      .waitForElementVisible('div.application--wrap', browser.globals.development.time_out)
      .assert.containsText('nav div.v-toolbar__content .v-toolbar__title div', 'Book your flight')
      .assert.containsText('main div.layout.row h1', 'Manage Reservations')
      .waitForElementPresent('main div.layout.row button', browser.globals.development.time_out)
      .waitForElementPresent('main div.layout.column div.elevation-1 div.v-table__overflow', browser.globals.development.time_out)
      .waitForElementPresent('main div.layout.column div.elevation-1 div.v-datatable.v-table', browser.globals.development.time_out)
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(1)', 'Flight Numbers')
      },

  'Test toggle of row count' : function (browser) {
    browser
      .click('div.v-datatable__actions__select .v-input__control')
      .pause(browser.globals.development.time_out)
      .click('div.v-menu__content.v-menu__content--auto.menuable__content__active .v-list div:nth-child(4)')
      .pause(browser.globals.development.time_out)
      .assert.containsText('div.v-datatable__actions__select div.v-select__selection.v-select__selection--comma', 'All')
      .saveScreenshot('./reports/saved_screenshot.png')
      .end();
  }
};
