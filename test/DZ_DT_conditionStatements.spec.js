 /**---------------------------function evenOdd------------------------------------------*/
    describe('Input result odd of even', () => {

        it('Even validation', () => {
            expect(evenOdd(2, 4)).to.be.equal(8);
        });

        it('Odd validation', () => {
            expect(evenOdd(3, 4)).to.be.equal(7);
        });
    });

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

    });

     /**---------------------------the sum of positive numbers-----------------------------------------*/
     describe('The sum of positive numbers of array', () => {

        it('Sum array [12, -5, 10])', () => {
            expect(sumPositivNum([12, -5, 10])).to.be.equal(22);
        });

        it('Sum array [12, 0, false]', () => {
            expect(sumPositivNum([12, 0, false])).to.be.equal(12);
        });

    });
    
    /**--------------------------------count the expression----------------------------------*/
    describe('Сount the expression', () => {

        it('Expression with str', () => {
            expect(expression(1, 3, 'str')).to.be.equal(undefined);
        });

        it('Expression with number', () => {
            expect(expression(1, 3, 5)).to.be.equal(18);
        });

    });
        
    /**------------------------Rating of the student by rating'--------------------------------*/
    describe('rating of the student by rating', () => {

        it('Raiting student - F', () => {
            expect(defineGrade(5)).to.be.equal('F');
        });

        it('Raiting student - E', () => {
            expect(defineGrade(25)).to.be.equal('E');
        });

        it('Raiting student - D', () => {
            expect(defineGrade(43)).to.be.equal('D');
        });

        it('Raiting student - C', () => {
            expect(defineGrade(63)).to.be.equal('C');
        });

        it('Raiting student - B', () => {
            expect(defineGrade(80)).to.be.equal('B');
        });

        it('Raiting student - A', () => {
            expect(defineGrade(95)).to.be.equal('A');
        });

        it('Raiting student - Not a number', () => {
            expect(defineGrade(NaN)).to.be.equal('Not a number');
        });

        it('Raiting student - undefined', () => {
            expect(defineGrade('')).to.be.equal(undefined);
        });

    });