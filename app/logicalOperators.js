logicalOperatorsAnswers = {
  /**
   * Applies the binary boolean OR operator to two boolean values a and b.
   * 
   * https://en.wikipedia.org/wiki/Logical_disjunction
   * 
   * @param {bool} a - A boolean value
   * @param {bool} b - A boolean value
   * @returns {bool} True if either a, b, or both are true, false otherwise.
   */
  or: function or(a, b) {
    
    if ( Boolean(a) || Boolean(b)){
      return true;      
    }
    else {
      return false;
    }

  },

  /**
   * Applies the binary boolean AND operator to two boolean values a and b.
   * 
   * https://en.wikipedia.org/wiki/Logical_conjunction
   * 
   * @param {bool} a - A boolean value
   * @param {bool} b - A boolean value
   * @returns {bool} True if either a and b are both true, false otherwise.
   */
  and: function and(a, b) {

   if ( Boolean(a) && Boolean(b)){
        return true;      
      }
    else {
      return false;
    }

  }
};