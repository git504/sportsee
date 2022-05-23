class User {
    constructor(
      firstName,
      lastName,
      age,
      score,
      calorie,
      protein,
      carbohydrate,
      lipid
    ) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
      this._score = score;
      this._calorie = calorie;
      this._protein = protein;
      this._carbohydrate = carbohydrate;
      this._lipid = lipid;
    }

    get firstName() {
      return this._firstName;
    }
    get lastName() {
      return this._lastName;
    }
    get age() {
      return this._age;
    }
    get score() {
      return this._score;
    }
    get calorie() {
      return this._calorie;
    }
    get protein() {
      return this._protein;
    }
    get carbohydrate() {
      return this._carbohydrate;
    }
    get lipid() {
      return this._lipid;
    }
  }

  export default User;
