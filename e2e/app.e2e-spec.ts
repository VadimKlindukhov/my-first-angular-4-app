import { TendersAppPage } from './app.po';

describe('tenders-app App', () => {
  let page: TendersAppPage;

  beforeEach(() => {
    page = new TendersAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
