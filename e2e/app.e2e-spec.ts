import { NodeappPage } from './app.po';

describe('nodeapp App', () => {
  let page: NodeappPage;

  beforeEach(() => {
    page = new NodeappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
