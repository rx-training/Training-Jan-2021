var UserData = class User{
    constructor(BikeNumber,PhoneNumber ,Name ,Days){
        this.BikeNumber = BikeNumber,
        this.PhoneNumber = PhoneNumber,
        this.Name = Name,
        this.Days = Days ,
        this.charge = this.calculate(this.Days)
    }

    calculate(Days){
        if(Days<=5) {
            return Days*500
        } else if(Days>5 && Days<=10) {
           return (2500 + (Days-5)*400)
        } else {
            return (4500 + (Days-10)*200)
        }
    }
    Compute(){
        console.log(`
Bike no : ${this.BikeNumber}
Phone number : ${this.PhoneNumber} 
Name : ${this.Name} 
Days : ${this.Days}
Charge : ${this.charge}`);
    }
}

module.exports = UserData
