/**
 * Creates a new SINGLE USER PERFORMANCE REPORT.
 * @class
 */
class UserPerformance {
  /**
   * Assign the performance details to the User.
   * @param {object} performances set the performance name with the right value.
   */
  constructor(performances) {
    this.kind = performances.kind;
    this._performance = performances.data.map((performance) => {
      return {
        ...performance,
        kind: this.kind[performance.kind],
      };
    });
  }

  get performance() {
    return this._performance;
  }
}

export default UserPerformance;
