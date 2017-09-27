import { AAssignment82Page } from './app.po';

describe('a-assignment82 App', function() {
  let page: AAssignment82Page;

  beforeEach(() => {
    page = new AAssignment82Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
