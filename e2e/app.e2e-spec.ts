import { GardenMapPage } from './app.po';

describe('garden-map App', () => {
  let page: GardenMapPage;

  beforeEach(() => {
    page = new GardenMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
