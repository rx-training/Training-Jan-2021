const fs = require("fs"); // Importing FS Module
const chalk = require("chalk"); // Importing Chalk

const args = process.argv.slice(2); //getting user input from command line

// Function for addition
const add = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

// Function for subtraction
const sub = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
};

// Function for multiplication
const mul = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
};

//Function for divition
const div = (num1, num2) => {
  return parseInt(num1) / parseInt(num2);
};

// Switch statement to perform function according to user's choice
switch (args[1]) {
  case "+":
    let addition = "Addition is : " + add(args[0], args[2]);
    try {
      fs.writeFileSync("ans.txt", addition, { flag: "w" }); // Writing ans in ans.txt file
      console.log(chalk.green("Addition Successfull"));
    } catch (err) {
      console.error(chalk.red(err));
    }
    break;
  case "-":
    let substraction = "Subtraction is : " + sub(args[0], args[2]);
    try {
      fs.writeFileSync("ans.txt", substraction, { flag: "w" });
      console.log(chalk.green("Substraction Successfull"));
    } catch (err) {
      console.error(chalk.red(err));
    }
    break;
  case "/":
    let divition = "Divition is : " + div(args[0], args[2]);
    try {
      fs.writeFileSync("ans.txt", divition, { flag: "w" });
      console.log(chalk.green("Divition Successfull"));
    } catch (err) {
      console.error(chalk.red(err));
    }
    break;
  case "*":
    let multiplication = "Multiplication is : " + mul(args[0], args[2]);
    try {
      fs.writeFileSync("ans.txt", multiplication, { flag: "w" });
      console.log(chalk.green("Divition Successfull"));
    } catch (err) {
      console.error(chalk.red(err));
    }
    break;
  default:
    console.log(chalk.red("Invalid Input"));
}

// Showing output from ans.txt file
try {
  const data = fs.readFileSync("ans.txt", "utf8");
  console.log(chalk.green(data));
} catch (err) {
  console.error(err);
}
