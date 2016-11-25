import { PeopleProjectPage } from './app.po';

describe('people-project App', function() {
  let page: PeopleProjectPage;

  beforeEach(() => {
    page = new PeopleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
