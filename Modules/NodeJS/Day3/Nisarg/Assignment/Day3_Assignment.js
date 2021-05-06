/*Rambo Rental Bikes is looking for developing a system to calculate the rentals of the bikes. 
System should accept the customer details, bike details and calculate the rental charges.
 DESCRIPTION OF PROJECTS
System allows users to add customer details with bike rented. It computes rent for each customer.
Systems displays the Bike details with summation of days of hire and rental payment.   FUNCTIONALITY AND TASK
Define a class called Mobike with the following description: 
Instance variables/data members: 
BikeNumber – to store the bike’s number
PhoneNumber – to store the phone number of the customer
Name – to store the name of the customer
Days – to store the number of days the bike is taken on rent o charge – to calculate and store the rental charge
Member methods:
void Compute( )
– to compute the rental charge
Bike No.         PhoneNo             No. of days         Charge
 The rent for a mobike is charged on the following basis:
First five days Rs 500 per day
Next five days Rs 400 per day
Rest of the days Rs 200 per day
Note use get this Data @param ES6 class  Exports BikeNo,Phone,Noofdays and Charge.*/
const chalk = require("chalk");
class Mobike {
    charges = 0;
    constructor(BikeNumber, PhoneNumber, Name, Days) {
        this.BikeNumber = BikeNumber;
        this.PhoneNumber = PhoneNumber;
        this.Name = Name;
        this.Days = Days;
    }

    compute() {
        const fiveDaysCharges = 500;
        const nextFiveDaysCharges = 400;
        const restOftheDaysCharges = 200;
        if (this.Days >= 0 && this.Days <= 5) {
            this.charges = this.Days * fiveDaysCharges;
        } else if (this.Days > 5 && this.Days <= 10) {
            this.charges = fiveDaysCharges * 5;
            this.charges += (this.Days - 5) * nextFiveDaysCharges;
        } else if (this.Days > 10) {
            this.charges = (fiveDaysCharges * 5) + (nextFiveDaysCharges * 5);
            this.charges += (this.Days - 10) * restOftheDaysCharges;
        }
    }
    display() {
        console.log(chalk.cyan(`Bike Number : ${this.BikeNumber}`));
        console.log(chalk.cyan(`Name : ${this.Name}`));
        console.log(chalk.cyan(`Phone Number : ${this.PhoneNumber}`));
        console.log(chalk.cyan(`Number of Days : ${this.Days}`));
        console.log(chalk.bgBlue(`Rent Charges : ${this.charges}`));
    }
}
module.exports = Mobike;