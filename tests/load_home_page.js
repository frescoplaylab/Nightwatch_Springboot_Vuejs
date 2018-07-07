// YOU SHALL NOT PASS TILL
// These assertions/tests have been writen in this test_suite.
// 1. Check for the mian text 'Book your flight'
// 2. Check for presense of element 'aside'
// 3. Check for presense of element 'nav'
// 4. Check if 'nav' is closed
// 5. Check for presense of element 'main'
// 6. Check if img has alt text 'Book your flight'
// 7. Check for presense of icon 'plane'
// 9. Check for presense of icon 'user'
// 9. Check for presense of icon 'clipboard'
// 10. Check for presense of element 'footer'

module.exports = {
  'Test Loading HomePage' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      // write your
      // code here
      .end();
  }
};
