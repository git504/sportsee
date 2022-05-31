/**
 * Creates a new SINGLE USER AVERAGE SESSIONS REPORT.
 * @class
 */
class UserAverageSession {
  /**
   * Assign the average sessions details to the User.
   * @param {Object} averageSessions the value from the API
   */
  constructor(averageSessions) {
    // console.log(averageSessions);
    this._averageSessions = averageSessions.sessions.map((session) => {
      return {
        name: this.initDay(session.day),
        ...session,
      };
    });
  }

  get sessions() {
    return this._averageSessions;
  }

  /**
   * @property {Function} initDay select out the value of the day
   * @returns {string} the first cap letter of the day. ex : LMMJVSD
   */
  initDay = (day) => {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        break;
    }
  };
}

export default UserAverageSession;
