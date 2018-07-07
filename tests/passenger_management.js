module.exports = {
  'Test passenger management loads' : function (browser) {
    browser
      .url(browser.globals.development.root_url + '/passenger')
      .waitForElementVisible('div.application--wrap', browser.globals.development.time_out)
      .assert.containsText('nav div.v-toolbar__content .v-toolbar__title div', 'Book your flight')
      .assert.containsText('main div.layout.row h1', 'Manage Passengers')
      .waitForElementPresent('main div.layout.row button.v-btn.theme--dark.blue', browser.globals.development.time_out)
      .waitForElementPresent('main div.layout.column div.elevation-1 div.v-table__overflow', browser.globals.development.time_out)
      .waitForElementPresent('main div.layout.column div.elevation-1 div.v-datatable.v-table', browser.globals.development.time_out)
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(1)', 'First name')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(2)', 'Last name')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(3)', 'Age')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(4)', 'Gender')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(5)', 'Phone')
      .assert.containsText('table.v-datatable.v-table thead tr th:nth-child(6)', 'Actions')
      },

  'Test toggle of row count' : function (browser) {
    browser
      .click('div.v-datatable__actions__select .v-input__control')
      .pause(browser.globals.development.time_out)
      .click('div.v-menu__content.v-menu__content--auto.menuable__content__active .v-list div:nth-child(4)')
      .pause(browser.globals.development.time_out)
      .assert.containsText('div.v-datatable__actions__select div.v-select__selection.v-select__selection--comma', 'All')
  },

  'Add passenger' : function (browser) {
    browser
      .click('main div.layout.row button.v-btn.theme--dark.blue')
      .waitForElementPresent('div.v-dialog.v-dialog--active.v-dialog--persistent', browser.globals.development.time_out)
      .setValue('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text form div.v-text-field:nth-child(1) input', 'John')
      .setValue('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text form div.v-text-field:nth-child(2) input', 'Doe')
      .setValue('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text form div.v-text-field:nth-child(3) input', '25')
      .click('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text form div.v-text-field:nth-child(4)')
      .pause(browser.globals.development.time_out)
      .click('div.v-menu__content.menuable__content__active div.v-card div.v-list :nth-child(3)')
      .setValue('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text form div.v-text-field:nth-child(5) input', '9969009969')
      .click('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text button:first-of-type')
  },

  'Edit option for passengers' : function (browser) {
    browser
      .waitForElementNotPresent('div.v-dialog.v-dialog--active.v-dialog--persistent', browser.globals.development.time_out)
      .execute(function() { document.querySelector('table.v-datatable tbody tr:last-of-type td:last-of-type div.flex:nth-child(1) button').click(); })
      .waitForElementPresent('div.v-dialog.v-dialog--active.v-dialog--persistent', browser.globals.development.time_out)
      .waitForElementPresent('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text button:last-of-type', browser.globals.development.time_out)
      .waitForElementPresent('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__actions button', browser.globals.development.time_out)
      .setValue('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text form div.v-text-field:nth-child(5) input', '1223334444')
      .click('div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card__text button:first-of-type')
      .end();
  }
};