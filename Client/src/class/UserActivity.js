class UserActivity {
  constructor(data) {
    this._activities = data.data.sessions.map((session) => {
      // console.log(this.initDate(session.day));
      return {
        name: this.initDate(session.day),
        ...session,
      };
    });
  }
  initDate = (date) => {
    const day = new Date(date);
    return day.getDate().toString();
  };

  get initActivity() {
    return this._activities;
  }
}

export default UserActivity;
