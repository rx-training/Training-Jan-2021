class Mobike {
  constructor(BikeNumber, PhoneNumber, Name, Days) {
    this.BikeNumber = BikeNumber;
    this.PhoneNumber = PhoneNumber;
    this.Name = Name;
    this.Days = Days;
  }
  compute() {
    var rent = 0;
    let rentFive = 500;
    let rentAfterFive = 400;
    let rentAfterTen = 200;
    if (this.Days >= 0 && this.Days <= 5) {
      rent = this.Days * rentFive;
    } else if (this.Days > 5 && this.Days <= 10) {
      rent = 5 * rentFive;
      rent += (this.Days - 5) * rentAfterFive;
    } else if (this.Days > 10) {
      rent = 5 * rentFive + 5 * rentAfterFive;
      rent += (this.Days - 10) * rentAfterTen;
    } else {
      rent = "Invalid Number Of Days";
    }
    return rent;
  }
}

module.exports = Mobike;
