class Mobike{
    constructor(BikeNumber,PhoneNummber,Name,Days){
        this.BikeNumber=BikeNumber;
        this.PhoneNummber=PhoneNummber;
        this.Name=Name;
        this.Days=Days;
        this.FirstFiveDays=500;
        this.NextFiveDays=400;
        this.RestofDays=200;
    }
    Compute(){
        if(this.Days<=5){
            return this.Days*this.FirstFiveDays;
        }
        else if(this.Days>=6 && this.Days<=10){
            return (5*this.FirstFiveDays) + ((this.Days-5)*this.NextFiveDays);
        }
        else if(this.Days>10){
            return (5*this.FirstFiveDays) + (5*this.NextFiveDays) + ((this.Days-10)*this.RestofDays);
        }
    }
}
module.exports = Mobike;