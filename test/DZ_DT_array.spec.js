describe('Input result odd of even', () => {

    it('Even validation', () => {
        expect(evenOdd(2, 4)).to.be.equal(8);
    });

    it('Odd validation', () => {
        expect(evenOdd(3, 4)).to.be.equal(7);
    });
});