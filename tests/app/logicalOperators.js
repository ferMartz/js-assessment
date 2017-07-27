describe('logical operators', () => {

  // CHANGED ALL LINES that ended with a non-existent ok() function
  // Check ChaiJS Documentation (http://chaijs.com/api/bdd/)
  // Check this link for more info: https://github.com/chaijs/chai/issues/371
  it('you should be able to work with logical or', () => {
    expect(logicalOperatorsAnswers.or(false, true)).to.be.ok;
    expect(logicalOperatorsAnswers.or(true, false)).to.be.ok;
    expect(logicalOperatorsAnswers.or(true, true)).to.be.ok;
    expect(logicalOperatorsAnswers.or(false, false)).not.to.be.ok;
    expect(logicalOperatorsAnswers.or(3, 4)).to.not.eq(7);
  });

  it('you should be able to work with logical and', () => {
    expect(logicalOperatorsAnswers.and(false, true)).not.to.be.ok;
    expect(logicalOperatorsAnswers.and(false, false)).not.to.be.ok;
    expect(logicalOperatorsAnswers.and(true, false)).not.to.be.ok;
    expect(logicalOperatorsAnswers.and(true, true)).to.be.ok;
    expect(logicalOperatorsAnswers.and(3, 4)).to.be.ok;
  });
});
