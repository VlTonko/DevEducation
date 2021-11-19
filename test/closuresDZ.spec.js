describe('Guessing about ticket sales, and the ability to give change.', () => {
  it('Checking the possibility on an array [25, 25, 50]', () => {
    expect(tickets([25, 25, 50])).to.be.equal('Yes');
  });

  it('Checking the possibility on an array [25, 25, 50]', () => {
    expect(tickets([25, 50, 100])).to.be.equal('NO. Vasya will not have enough money to give change');
  });

  it('Possibility check on an empty array', () => {
    expect(tickets([])).to.be.equal('Array is empty');
  });

  it('Is the passed data an array?', () => {
    expect(tickets('string')).to.be.equal(undefined);
  });
});

describe('The sum of two infinite number strings.', () => {
  it('Check, addition if the operational sum < 10', () => {
    expect(getSum('1111111111', '222222222222222222222')).to.be.equal('222222222223333333333');
  });
  it('Check, addition if the operational sum > 10', () => {
    expect(getSum('555555555555', '777777777777777')).to.be.equal('778333333333332');
  });
  it('Check if 1 argument is not a string', () => {
    expect(getSum(222, '222222222222222222222')).to.be.equal('222222222222222222222');
  });
  it('Check if 2 argument is not a string', () => {
    expect(getSum('1111111111', 222)).to.be.equal('1111111111');
  });
  it('Checking if arguments are not strings', () => {
    expect(tickets('string')).to.be.equal(undefined);
  });
});

describe('Counting the number of posts and comments by the author', () => {
  it('First arguments is not array', () => {
    expect(getQuntityPostsByAuthor('string', 'Rimus')).to.be.equal(undefined);
  });
  it('First arguments is empty array', () => {
    expect(getQuntityPostsByAuthor([], 'Rimus')).to.be.equal('Posts: 0, comments: 0');
  });
  it('Second arguments is not string', () => {
    expect(getQuntityPostsByAuthor(listOfPosts2, 22)).to.be.equal(undefined);
  });
  it('Checking the correct values', () => {
    expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).to.be.equal('Posts: 1, comments: 3');
  });
});

describe('Caching values', () => {
  it('Checking for correctness of output', () => {
    expect(cashedFunc('foo', 'bar')).to.be.equal('foo bar');
  });
  it('Empty check', () => {
    expect(cashedFunc()).to.be.equal(undefined);
  });
  it('Check if one value is transmitted', () => {
    expect(cashedFunc('foo')).to.be.equal(undefined);
  });
});
