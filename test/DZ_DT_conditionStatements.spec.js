 /**---------------------------function evenOdd------------------------------------------*/
    describe('Input result odd of even', () => {

        it('Even validation', () => {
            expect(evenOdd(2, 4)).to.be.equal(8);
        });

        it('Odd validation', () => {
            expect(evenOdd(3, 4)).to.be.equal(7);
        });
    })

 /**---------------------------quarter definition------------------------------------------*/
    describe('Quarter definition', () => {

        it('Validation First quarter', () => {
            expect(searchPoint(10, 10)).to.equal('First quarter');
        });

        it('Validation Second quarter', () => {
            expect(searchPoint(-10, 10)).to.equal('Second quarter');
        });

        it('Validation Third quarter', () => {
            expect(searchPoint(-10, -10)).to.equal('Third quarter');
        });

        it('Validation Fourth quarter', () => {
            expect(searchPoint(10, -10)).to.equal('Fourth quarter');
        });

        it('Validation Another universe', () => {
            expect(searchPoint(0, 0)).to.equal('Another universe');
        });

    })

     /**---------------------------the sum of positive numbers-----------------------------------------*/
     describe('The sum of positive numbers of array', () => {

        it('Sum array [12, -5, 10])', () => {
            expect(sumPositivNum([12, -5, 10])).to.be.equal(22);
        });

        it('Sum array [12, 0, false]', () => {
            expect(sumPositivNum([12, 0, false])).to.be.equal(12);
        });
        
    })/**-------------------------------------------------------------------*/