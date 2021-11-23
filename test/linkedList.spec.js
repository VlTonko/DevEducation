describe('Verification of methods linkedlist.', () => {
  const linkedList = new LinkedList();

  it('Should be size 0', () => {
    expect(linkedList.size()).to.be.equal(0);
  });

  it('should be empty', () => {
    expect(linkedList.isEmpty()).to.be.eql(true);
  });

  it('should be add value "111"', () => {
    expect(linkedList.add('111')).to.be.eql(undefined);
  });

  it('should be head - true', () => {
    expect(linkedList.head()).to.be.eql({ element: '111', next: null });
  });

  it('should be indexOf element "111" - 0', () => {
    expect(linkedList.indexOf('111')).to.be.eql(0);
  });

  it('should be elementAt(0) - "111"', () => {
    expect(linkedList.indexOf('111')).to.be.eql(0);
  });

  it('should be remote("111")', () => {
    expect(linkedList.remove('111')).to.be.eql(undefined);
  });

  it('should be empty', () => {
    expect(linkedList.isEmpty()).to.be.eql(true);
  });
});
