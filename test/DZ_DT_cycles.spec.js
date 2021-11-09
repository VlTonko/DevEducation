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