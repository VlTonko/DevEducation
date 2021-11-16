describe('String name of the day of the week by day number', () => {
  it('Checking for the "number" type', () => {
    expect(dayOfWeek('true')).to.be.equal(undefined);
  });
  it('Check for "4" - Thursday', () => {
    expect(dayOfWeek(4)).to.be.equal('Thursday');
  });
  it('Checking for "7" - Sunday', () => {
    expect(dayOfWeek(7)).to.be.equal('Wednesday');
  });
  it('Checking for "0" - undefined', () => {
    expect(dayOfWeek(0)).to.be.equal(undefined);
  });
});

describe('Find the distance between two points in 2D Cartesian space.', () => {
  it('The distance between points with coordinates (-1, -3, 10, 10) is 17', () => {
    expect(distance(-1, -3, 10, 10)).to.be.equal(17);
  });
  it('The distance between points with coordinates (-1, 3, 10, 10) is 13', () => {
    expect(distance(-1, 3, 10, 10)).to.be.equal(13);
  });
  it('The distance between points with coordinates (0, 0, 0, 0) is 0', () => {
    expect(distance(0, 0, 0, 0)).to.be.equal(0);
  });
});

describe('Enter the number (0-999), we get a line with the words of the number', () => {
  it('Enter the number 999', () => {
    expect(convertHundreds(999)).to.be.equal('nine hundred ninety nine');
  });

  it('Enter the number 0', () => {
    expect(convertHundreds(0)).to.be.equal('');
  });

  it('Enter the string "true"', () => {
    expect(convertHundreds('true')).to.be.equal('undefined undefined');
  });
});
