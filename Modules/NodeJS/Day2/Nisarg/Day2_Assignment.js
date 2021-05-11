/*Do mathematical operation like Addition, subtraction, multiplication, div.
Use case statement.
Accept two numbers from the user from the command line.
Create Separate function for add, sub, multi and div
And store the result in one txt file. And display the result from file. */
const fs = require("fs");
const chalk = require("chalk");

const args = process.argv.slice(2);
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);
const choose = parseInt(args[2]);
console.log(num1);
console.log(num2);
const add = (num1, num2) => {
    //console.log(`Addition of   ${num1}  &  ${num2}  is  ${num1 + num2}`);
    fs.writeFile(
        "Ans.txt",
        `Addition of   ${num1}  &  ${num2}  is  ${num1 + num2}`,
        { flag: "w+" },
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
        }
    );
};
const sub = (num1, num2) => {
    //console.log(`Subtraction of ${num1} & ${num2} is: ${num1 - num2} `);
    fs.writeFile(
        "Ans.txt",
        `Subtraction of ${num1} & ${num2} is: ${num1 - num2} `,
        { flag: "w+" },
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
        }
    );
};
const mul = (num1, num2) => {
    //console.log(`Multiplication of ${num1} & ${num2} is: ${num2 * num1} `);
    fs.writeFile(
        "Ans.txt",
        `Multiplication of ${num1} & ${num2} is: ${num2 * num1} `,
        { flag: "w+" },
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
        }
    );
};
const div = (num1, num2) => {
    //console.log(`Division of ${num1} & ${num2} is: ${num1 / num2}`);
    fs.writeFile(
        "Ans.txt",
        `Division of ${num1} & ${num2} is: ${num1 / num2}`,
        { flag: "w+" },
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
        }
    );
};

switch (choose) {
    case 1:
        add(num1, num2);
        break;
    case 2:
        sub(num1, num2);
        break;
    case 3:
        mul(num1, num2);
        break;
    case 4:
        div(num1, num2);
        break;
    default:
        console.log("Choose Between 1 to 4");
        break;
}

fs.readFile("Ans.txt", "utf8", (err, data) => {
    if (err) {
        console.error(bgRed(err));
    }
    console.log(chalk.blue(data));
});