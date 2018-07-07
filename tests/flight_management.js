module.exports = {
  'Test flight management loads' : function (browser) {
    browser
      .url(browser.globals.development.root_url + '/flight')
      .waitForElementVisible('div.application--wrap', browser.globals.development.time_out)
      .assert.containsText('nav div.v-toolbar__content .v-toolbar__title div', 'Book your flight')
      .assert.containsText('main div.layout.row h1', 'Manage Flights')
      .waitForElementPresent('main div.layout.row button.v-btn.theme--dark.blue', browser.globals.development.time_out)
      .waitForElementPresent('main div.layout.column div.elevation-1 div.v-table__overflow', browser.globals.development.time_out)
      .waitForElementPresent('main div.layout.column div.elevation-1 div.v-datatable.v-table', browser.globals.development.time_out)
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(1)', 'Flight Number')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(2)', 'Vacancy')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(3)', 'Price')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(4)', 'Between')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(5)', 'Departure')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(6)', 'Arrival')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(7)', 'Actions')
  },

  'Test toggle of row count' : function (browser) {
    browser
      .click('div.v-datatable__actions__select .v-input__control')
      .pause(browser.globals.development.time_out)
      .click('div.v-menu__content.v-menu__content--auto.menuable__content__active .v-list div:nth-child(4)')
      .pause(browser.globals.development.time_out)
      .assert.containsText('div.v-datatable__actions__select div.v-select__selection.v-select__selection--comma', 'All')
  },

  'Add flight modal comes up' : function (browser) {
    browser
      .click('main div.layout.row button.v-btn.theme--dark.blue')
      .waitForElementPresent('div.v-dialog.v-dialog--active', browser.globals.development.time_out)
      .assert.attributeEquals('div.v-dialog__content.v-dialog__content--active', 'tabindex', '-1')
      .assert.containsText('div.v-dialog.v-dialog--active div[color=blue]', 'Add a flight')
      .assert.containsText('div.v-dialog.v-dialog--active div.v-card__text form div.v-input.v-text-field:nth-child(1) label', 'Flight number (cannot be edited later)')
      .assert.containsText('div.v-dialog.v-dialog--active div.v-card__text form button:first-of-type div', 'SUBMIT')
      .assert.containsText('div.v-dialog.v-dialog--active div.v-card__text form button:last-of-type div', 'CLEAR')
      .waitForElementPresent('div.v-dialog.v-dialog--active div.v-card__actions button', browser.globals.development.time_out)
  },

  'Add flight' : function (browser) {
    browser
      .click('main div.layout.row button.v-btn.theme--dark.blue')
      .waitForElementPresent('div.v-dialog.v-dialog--active', browser.globals.development.time_out)
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(1) input', 'IAF001')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(2) input', 'HAL-DRDO')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(3) input', 'P1')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(4) input', 'Prototype One - Made In India')
      .click('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(5)')
      .click('div.v-menu__content.menuable__content__active div.v-card div.v-list div:nth-child(20)')
      .click('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(5)')
      .click('div.v-menu__content.menuable__content__active div.v-card div.v-list div:nth-child(40)')
      .click('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(5)')
      .click('div.v-menu__content.menuable__content__active div.v-card div.v-list div:nth-child(60)')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(6) input', 'MAA')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(7) input', 'DEL')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(8) input', '999')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(9) input', '2019-01-01 10')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(10) input', '2019-01-01 11')
      .setValue('div.v-dialog.v-dialog--active div.v-card__text form div.v-text-field:nth-child(11) input', '999')
      .click('div.v-dialog.v-dialog--active div.v-card__text form button:first-of-type')
      .assert.cssClassNotPresent('table.v-datatable tbody tr td', 'text-xs-center')
      .assert.containsText('table.v-datatable tbody tr:last-of-type td:nth-child(1)', 'IAF001')
      .end();
  }
};
