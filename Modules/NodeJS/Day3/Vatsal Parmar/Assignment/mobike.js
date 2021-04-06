class Mobike {
  constructor(BikeNumber, PhoneNumber, Name, Days) {
    this.BikeNumber = BikeNumber;
    this.PhoneNumber = PhoneNumber;
    this.Name = Name;
    this.Days = Days;
  }
  compute() {
    var rent = 0;
    if (this.Days >= 0 && this.Days <= 5) {
      rent = this.Days * 500;
    } else if (this.Days > 5 && this.Days <= 10) {
      rent = 2500;
      rent += (this.Days - 5) * 400;
    } else if (this.Days > 10) {
      rent = 4500;
      rent += (this.Days - 10) * 200;
    } else {
      rent = "Invalid Number Of Days";
    }
    return rent;
  }
}

module.exports = Mobike;
