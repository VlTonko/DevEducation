describe('Find sum even number & numbers 1 - 99', () => {
  it('Validation number 99 (2450/49)', () => {
    expect(sumNumbers(99)).to.be.equal('Sum of even numbers: 2450, Number of even numbers: 49');
  });
});

describe('Number is prime?', () => {
  it('Number is prime.', () => {
    expect(numberIsPrime(7)).to.be.equal('Number is prime');
  });

  it('Number is not prime.', () => {
    expect(numberIsPrime(25)).to.be.equal('Number is not prime');
  });
});

describe('Find the sqrt of a natural number', () => {
  it('Sqrt - Selection method:', () => {
    expect(selectionSqr(5)).to.be.equal('Integer root of a natural number(Selection method) 2');
  });

  it('Sqrt - BenarySort:', () => {
    expect(benarySqrt(22)).to.be.equal(4);
  });
});

describe('Calculate factorial of number n', () => {
  it('Calculate factorial ', () => {
    expect(factorial(7)).to.be.equal(5040);
  });
});

describe('Sum of numbers', () => {
  it('Sum of numbers - if from 1 to given', () => {
    expect(sumNum(5)).to.be.equal(16);
  });

  it('Sum of numbers - if it is the sum of composite numbers', () => {
    expect(sumNum2(22)).to.be.equal(4);
  });
});

describe('Print a number that is a mirror image of a sequence of digits of a given number.', () => {
  it('Calculate factorial ', () => {
    expect(mirrorNum(123)).to.be.equal(321);
  });
});
