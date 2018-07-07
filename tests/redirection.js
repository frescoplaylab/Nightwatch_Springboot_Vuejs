module.exports = {
  'Test on_click of flight management' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementPresent('div.application--wrap', browser.globals.development.time_out)
      .click('div.row button:nth-of-type(1)')
      .pause(browser.globals.development.time_out)
      .waitForElementPresent('div.row h1', browser.globals.development.time_out)
      .waitForElementPresent('div.container', browser.globals.development.time_out)
      .assert.urlEquals(browser.globals.development.root_url + '/flight')
  },

  'Test navigation to reservation management' : function (browser) {
    browser
      .click('nav div.v-toolbar__content button')
      .waitForElementPresent('nav div.v-toolbar__content button:last-of-type i.v-icon.material-icons', browser.globals.development.time_out)
      .pause(browser.globals.development.time_out)
      .click('aside div.v-list div:nth-child(3) div div')
      .waitForElementPresent('div.row h1', browser.globals.development.time_out)
      .assert.urlEquals(browser.globals.development.root_url + '/reservation')
  },

  'Test navigation to home page' : function (browser) {
    browser
      .click('nav div.v-toolbar__content div.v-toolbar__title div')
      .pause(browser.globals.development.time_out)
      .assert.urlEquals(browser.globals.development.root_url + '/')
      .end();
  }
};