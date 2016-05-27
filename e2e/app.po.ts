export class AbcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('abc-app h1')).getText();
  }
}
