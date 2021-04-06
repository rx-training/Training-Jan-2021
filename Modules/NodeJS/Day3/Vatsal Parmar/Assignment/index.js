const Mobike = require("./mobike");
const chalk = require("chalk");

// function to display rental details
const details = (name, bike, phNo, days, charge) => {
  console.log(chalk.yellow("------------------------"));
  console.log(chalk.bgWhite(chalk.blue("Rambo Rental Bikes")));
  console.log(chalk.bgWhiteBright(chalk.greenBright("Name : " + name)));
  console.log(chalk.bgWhiteBright(chalk.greenBright("Bike Number : " + bike)));
  console.log(chalk.bgWhiteBright(chalk.greenBright("Phone Number : " + phNo)));
  console.log(
    chalk.bgWhiteBright(chalk.greenBright("Number Of Days : " + days))
  );
  console.log(
    chalk.bgWhiteBright(chalk.redBright("Total Charges : " + charge))
  );
  console.log(chalk.yellow("------------------------"));
};

// adding customers
var cust1 = new Mobike(111, 123455, "abc", 1);
var cust2 = new Mobike(222, 456789, "def", 7);
var cust3 = new Mobike(333, 912345, "xyz", 12);

// adding customes in array
arr = [cust1, cust2, cust3];

// showing all customers rental details
arr.forEach((a) => {
  details(a.Name, a.BikeNumber, a.PhoneNumber, a.Days, a.compute());
});
