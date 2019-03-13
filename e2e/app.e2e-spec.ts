import { MdWebsitePage } from './app.po';

describe('mat-website App', function() {
  let page: MdWebsitePage;

  beforeEach(() => {
    page = new MdWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
