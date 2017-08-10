import { WebglDemoPage } from './app.po';

describe('webgl-demo App', () => {
  let page: WebglDemoPage;

  beforeEach(() => {
    page = new WebglDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
