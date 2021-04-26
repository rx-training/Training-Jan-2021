class Mobike {

    constructor(BikeNumber , PhoneNumber  , Name , Days){
        this.BikeNumber =  BikeNumber;
        this.PhoneNumber = PhoneNumber;
        this.Name = Name;
        this.Days = Days;
        this.firstFiveDayCharge = 500;
        this.FivetoTenDayCharge = 400;
        this.MoreThenTenDayCharge = 200;
    }

    get charge(){
        return this.compute()
    }

    get name(){
        return this.Name;
    }

    get phoneNumber(){
        return this.phoneNumber;
    }

    get bikeNumber(){
        return this.BikeNumber;
    }

    compute (Days) {
        var charge = 0;
        var count = this.Days;
        for (var i=0 ; i<count ; i++){
                    
            if(i < 5 ){
                charge = charge + this.firstFiveDayCharge; 
            }
            else if(i > 4 && i < 10)
            {
                charge = charge + this.FivetoTenDayCharge;
            }
            else if(i > 9 && i < 18 )
            {
                charge = charge + this.MoreThenTenDayCharge;
            }
                    
        }
        console.log(charge);
    }
}
const obj = new Mobike(4207 , 165632343 , 'ankur' , 18);
obj.charge;
console.log(obj.name);