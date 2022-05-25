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

  get arrayOfPercentScore() {
    return this.calcScore();
  }

  calcScore() {
    return [
      { name: "score", value: this._score * 100 },
      { name: "total", value: 100 - this._score * 100 },
    ];
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
