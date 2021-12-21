const { View } = require('../scripts/view');

describe('testing View classes', () => {
  test('getNextImage should be true', () => {
    const view = new View();
    expect(view.nextSlide()).toBeTruthly();
  });
  test('getPreviousImage should be true', () => {
    const view = new View();
    expect(view.prewSlide()).toBeTruthly();
  });
  test('playShowImage should be true', () => {
    const view = new View();
    expect(view.runShow()).toBeTruthly();
  });
  test('pauseShowImage should be true', () => {
    const view = new View();
    expect(view.stopShow()).toBeTruthly();
  });
});
