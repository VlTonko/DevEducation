describe('Find the minimum element of an array', () => {
  it('Minimum element [1, 3, 5, 2, 8, 1] = 1;', () => {
    expect(minValue([1, 3, 5, 2, 8, 1])).to.be.equal(1);
  });
});

describe('Find the maximum element of an array', () => {
  it('Maximum element [1, 3, 5, 2, 8, 1] = 8;', () => {
    expect(maxValue([1, 3, 5, 2, 8])).to.be.equal(8);
  });
});

describe('Find the index of the minimum element of an array', () => {
  it('Index of the minimum element [1, 3, 5, 2, 8, 1] = 0;', () => {
    expect(minIndex([1, 3, 5, 2, 8])).to.be.equal(0);
  });
});

describe('Find the index of the maximum element of an array', () => {
  it('Index of the maximum element [1, 3, 5, 2, 8, 1] = 4;', () => {
    expect(maxIndex([1, 3, 5, 2, 8])).to.be.equal(4);
  });
});

describe('Calculate the sum of the array elements with odd indices:', () => {
  it('Sum of the array elements [1, 3, 5, 2, 8] = 9;', () => {
    expect(sumOdd([1, 3, 5, 2, 8])).to.be.equal(9);
  });
});

describe('Reverse the array (array in the opposite direction):', () => {
  it('Reverse Array [1, 2, 3, 4] = [4, 3, 2, 1]];', () => {
    expect(reverseArr([1, 2, 3, 4])).to.eql([4, 3, 2, 1]);
  });
});

describe('Count the number of odd elements in the array:', () => {
  it('Number of odd array: [1, 3, 5, 2, 8] = 3;', () => {
    expect(numberOdd([1, 3, 5, 2, 8])).to.be.equal(3);
  });
});

describe('Swap the first and second half of the array:', () => {
  it('For example, for array 1 2 3 4, the result is 3 4 1 2:', () => {
    expect(reversePartArr([1, 2, 3, 4])).to.be.eql([3, 4, 1, 2]);
  });
});

describe('Sort the array (Bubble, Select, Insert)', () => {
  it('Bubble method', () => {
    expect(bubbleSort([100, 2, 3, 4, 9])).to.be.eql([2, 3, 4, 9, 100]);
  });

  it('Select method', () => {
    expect(selectionSort([100, 2, 3, 4, 9])).to.be.eql([2, 3, 4, 9, 100]);
  });

  it('Insert method', () => {
    expect(insertionSort([100, 2, 3, 4, 9])).to.be.eql([2, 3, 4, 9, 100]);
  });
});
