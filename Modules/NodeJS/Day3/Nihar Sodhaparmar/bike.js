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

        if(this.days > 10){
            charge = (5 * 500) + (5* 400) + ((this.days-10) * 200);
        }
        else if(this.days > 5){
            charge = (5 * 500) + ((this.days-5) * 400);
        }
        else{
            charge = this.days * 500;
        }

        return charge;
    }
}

module.exports = { MoBike };