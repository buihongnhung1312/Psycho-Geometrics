import { PsychoGeometricsPage } from './app.po';

describe('psycho-geometrics App', function() {
  let page: PsychoGeometricsPage;

  beforeEach(() => {
    page = new PsychoGeometricsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
