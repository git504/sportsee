/**
 * Creates a new SINGLE USER ACTIVITY REPORT.
 * @class
 */
class UserActivity {
  /**
   * Assign the user activity details.
   * @param {Object} averageSessions the value from the API.
   */
  constructor(data) {
    this._activities = data.sessions.map((session) => {
      // console.log(this.initDate(session.day));
      return {
        name: this.initDate(session.day),
        ...session,
      };
    });
  }

  /**
   * @property {Function} initDate select out the day.
   * @returns {number} the number of the day between 1 & 31.
   */
  initDate = (date) => {
    const day = new Date(date);
    return day.getDate().toString();
  };

  get initActivity() {
    return this._activities;
  }
}

export default UserActivity;
