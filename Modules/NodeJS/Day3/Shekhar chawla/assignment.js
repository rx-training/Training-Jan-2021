
// Assignment


const Rent = require('./RamboRental.js')
const jane = new Rent('Jane doe', 123456777, 'JK02PH5544', 14)
const mary = new Rent('Mary doe', 323444112, 'JK02PH3325', 9)
console.log(`Bike No. \t PhoneNo \t No. of days \t Charge`)
console.log(`${jane.BikeNo} \t ${jane.Phone} \t ${jane.NoOfDays} \t\t\t ${jane.Compute()}`)
console.log(`${mary.BikeNo} \t ${mary.Phone} \t ${mary.NoOfDays} \t\t\t\t ${mary.Compute()}`)








// Rambo Rental Bikes is looking for developing a system to calculate the rentals of the bikes. System should accept the customer details, bike details and calculate the rental charges.

//  DESCRIPTION OF PROJECTS

// System allows users to add customer details with bike rented. It computes rent for each customer. Systems displays the Bike details with summation of days of hire and rental payment.   FUNCTIONALITY AND TASK

// Define a class called Mobike with the following description: 

// Instance variables/data members: 

// BikeNumber – to store the bike’s number

// PhoneNumber – to store the phone number of the customer

// Name – to store the name of the customer
// Days – to store the number of days the bike is taken on rent o charge – to calculate and store the rental charge

// Member methods:

// void Compute( )

// – to compute the rental charge

// Bike No.         PhoneNo             No. of days         Charge

//  The rent for a mobike is charged on the following basis:

// First five days Rs 500 per day

// Next five days Rs 400 per day

// Rest of the days Rs 200 per day

// Note use get this Data @param ES6 class  Exports BikeNo,Phone,Noofdays and Charge.

// Online Reference:

// https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports

// https://www.tutorialspoint.com/nodejs/nodejs_global_objects.htm

// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
