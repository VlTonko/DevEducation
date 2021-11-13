describe('An algorithm that calculates how long it takes to cook eggs.', () => {
  it('Cooking 5 eggs takes 5 minutes.', () => {
    expect(getCookingTime(5)).to.be.equal(5);
  });
  it('Cooking 9 eggs takes 10 minutes.', () => {
    expect(getCookingTime(9)).to.be.equal(10);
  });

  it('Cooking 0 eggs takes 0 minutes.', () => {
    expect(getCookingTime(0)).to.be.equal(0);
  });
  it('Checking for the string "true"', () => {
    expect(getCookingTime('true')).to.be.equal(undefined);
  });
});

describe('Find an individual number (odd or even) in an array.', () => {
  it('For [1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17], the individual number will be 4', () => {
    expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.be.eql([4]);
  });
  it('For [0, 2, 8, -4, 0, -122, 13, -4, 28, 12], the individual number will be 13', () => {
    expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.be.eql([13]);
  });

  it('Checks for the string - undefined', () => {
    expect(getNumber('true')).to.be.equal(undefined);
  });
});

describe('An algorithm that filters the array given as the first parameter and returns an array of objects that contain the given string as the second parameter in their headers', () => {
  it('Finding objects with title property and collecting in JS value', () => {
    expect(findTitle([{ title: 'Some title1' }, { title: 'I like JS' }, { user: 'This obj doesn’t have key title js' }, { title: 'Js - is the best!' }], 'js')).to.be.eql([
      { title: 'I like JS' },
      { title: 'Js - is the best!' },
    ]);
  });
});

describe('The function must return an object in which the keys are the characters of the string, the value is the number of repetitions of characters in the string', () => {
  it('For string "sparrow" - {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}', () => {
    expect(countCharacters('sparrow')).to.be.eql({ s: 1, p: 1, a: 1, r: 2, o: 1, w: 1 });
  });
  it('For string "aabcddeffge" - { a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}', () => {
    expect(countCharacters('aabcddeffge')).to.be.eql({ a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1 });
  });
  it('For string "a 2ab !d" - {2: 1, a: 2, b: 1, d: 1}', () => {
    expect(countCharacters('a 2ab !d')).to.be.eql({ 2: 1, a: 2, b: 1, d: 1 });
  });
});

describe('Taking a number, your function should find the next larger positive palindrome.', () => {
  it('The palindrome of the number 7 is 11', () => {
    expect(getNextPalindrome(7)).to.be.eql(11);
  });
  it('The palindrome of the number 132 is 141', () => {
    expect(getNextPalindrome(132)).to.be.eql(141);
  });
  it('Checks for the string - undefined', () => {
    expect(getNextPalindrome('true')).to.be.eql(undefined);
  });
});

describe('Create a Set data structure using an object, create add, remove, has methods', () => {
  it('Creating a new object', () => {
    expect(new ObjSet()).to.be.eql({});
  });
});
