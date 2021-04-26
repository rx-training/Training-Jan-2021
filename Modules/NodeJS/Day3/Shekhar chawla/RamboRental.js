const Mobike = class {
	constructor(name, number, bikeNumber, daysRented) {
		this.name = name
		this.Phone = number
		this.BikeNo = bikeNumber
		this.NoOfDays = daysRented
	}

	Compute() {
		if(this.NoOfDays>10){
			return 5*500 + 5*400 + (this.NoOfDays-10)*200
		}
		else if (this.NoOfDays > 5) {
			return 5*500 + (this.NoOfDays-5)*400
		}
		else {
			return this.NoOfDays*500
		}
	}

}

module.exports = Mobike