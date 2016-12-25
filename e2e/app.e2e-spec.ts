import { CommentsPage } from './app.po';

describe('comments App', function() {
  let page: CommentsPage;

  beforeEach(() => {
    page = new CommentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
