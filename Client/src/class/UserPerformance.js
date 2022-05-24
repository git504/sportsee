export default class UserPerformance {
  constructor(performances) {
    this.kind = performances.data.kind;
    this._performance = performances.data.data.map((performance) => {
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
