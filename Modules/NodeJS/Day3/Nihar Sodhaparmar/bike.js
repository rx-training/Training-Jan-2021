class MoBike
{

    constructor(name, bikeNumber, phoneNumber, days){
        this.name = name;
        this.bikeNumber = bikeNumber;
        this.phoneNumber = phoneNumber;
        this.days = days;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setBikeNumber(){
        this.bikeNumber = bikeNumber;
    }

    getBikeNumber(){
        return this.bikeNumber;
    }

    setPhoneNumber(){
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber(){
        return this.phoneNumber
    }

    setDays(){
        this.days = days;
    }

    getDays(){
        return this.days;
    }

    compute(){
        
        let charge;
        let chargeForFirstFiveDays = 500;
        let chargeForSecondFiveDays = 400;
        let chargeForRemainingDays = 200;

        if(this.days > 10){
            charge = (5 * chargeForFirstFiveDays) + (5 * chargeForSecondFiveDays) + ((this.days-10) * chargeForRemainingDays);
        }
        else if(this.days > 5){
            charge = (5 * chargeForFirstFiveDays) + ((this.days-5) * chargeForSecondFiveDays);
        }
        else{
            charge = this.days * chargeForFirstFiveDays;
        }

        return charge;
    }
}

module.exports = { MoBike };