const { domElements } = require('../scripts/elements');

describe('Testing addEventListeners', () => {
  test('test domElements.buttonIdNextBtn should be click', () => {
    const mockCall = jest.fn();
    const element = domElements.btnNext;
    element.click(mockCall);
    expect(element).not.toBeFalsy();
    expect(element).toBeDefined();
  });
  test('test domElements.buttonIdPrevBtn should be click', () => {
    const mockCall = jest.fn();
    const element = domElements.btnPrew;
    element.click(mockCall);
    expect(element).not.toBeFalsy();
    expect(element).toBeDefined();
  });
  test('test domElements.buttonIdControllBtn should be click', () => {
    const mockCall = jest.fn();
    const element = domElements.btnPrew;
    element.click(mockCall);
    expect(element).not.toBeFalsy();
    expect(element).toBeDefined();
  });
});
