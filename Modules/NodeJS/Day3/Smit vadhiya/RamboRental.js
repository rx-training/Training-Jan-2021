var UserData = class User{
    constructor(BikeNumber,PhoneNumber ,Name ,Days){
        this.BikeNumber = BikeNumber
        this.PhoneNumber = PhoneNumber
        this.Name = Name
        this.Days = Days 
        this.lessThanFive = 500
        this.fiveToTen = 400
        this.afterTen = 200
        this.charge = this.calculate(this.Days)
    }
    
    calculate(Days){
        if(Days<=5) {
            return Days*this.lessThanFive
        } else if(Days>5 && Days<=10) {
           return (5*this.lessThanFive + (Days-5)*this.fiveToTen)
        } else {
            return (5*this.lessThanFive + 5*this.fiveToTen + (Days-10)*this.afterTen)
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
