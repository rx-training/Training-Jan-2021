const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

//Practice Exercise Day2

// 1. Create one txt file name it as person.txt and write in that hello world

var content = "Helo World";
fs.writeFile("person.txt", content, { flag: "w+" }, (err) => {
  if (err) {
    console.log(chalk.red(err));
  }
});

// 2. Append hello India in person.txt.

var content = "Helo India";
fs.writeFile("person.txt", content, { flag: "a+" }, (err) => {
  if (err) {
    console.log(chalk.red(err));
  }
});

// 3. Accept your name from command line. And append it to person.txt as “hello “+“name”.

const args = process.argv.slice(2);
var content = "Hello" + args;
fs.writeFile("person.txt", content, { flag: "a+" }, (err) => {
  if (err) {
    console.log(chalk.red(err));
  }
});

// 4. Create two txt files, write some dummy text. Read two file content and print it in the console.
// use async and await.

var content = "Hello, How are you.";
fs.writeFile("demo.txt", content, { flag: "w+" }, (err) => {
  if (err) {
    console.log(chalk.red(err));
  }
});

const readData = async (x) => {
  fs.readFile(x, "utf8", (err, data) => {
    if (err) {
      console.log(chalk.red(err));
    }
    console.log(chalk.green(data));
  });
};

async function read(x, y) {
  await readData(x);
  await readData(y);
}

read("demo.txt", "test.txt");

// 5. Write your address in one txt file and find out how many consonants are there.

fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(chalk.red(err));
  }
  let arr = data.split("");
  let consonants = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "A" ||
      arr[i] == "a" ||
      arr[i] == "E" ||
      arr[i] == "e" ||
      arr[i] == "I" ||
      arr[i] == "i" ||
      arr[i] == "o" ||
      arr[i] == "O" ||
      arr[i] == "u" ||
      arr[i] == "U" ||
      arr[i] == " "
    ) {
    } else {
      consonants++;
    }
  }
  console.log(chalk.green("total consonants " + consonants));
});

// 6.  Remove person.txt file.
try {
  fs.unlinkSync("./person.txt");
  console.log(chalk.yellow("File Deleted"));
} catch (e) {
  console.log(chalk.red(err));
}

//7. Create one folder files and move person.txt in that file.

const folderName = "./Test";

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.log(chalk.red(err));
}

try {
  fs.renameSync("person.txt", "./Test/person.txt");
  console.log(chalk.green("File Moved Successfully"));
} catch (e) {
  console.log(chalk.red(e));
}

/* Extra Practice */

// File Paths
// const notes = "/users/joe/notes.txt";

// console.log(chalk.yellow(path.dirname(notes)));
// console.log(chalk.yellow(path.basename(notes)));
// console.log(chalk.yellow(path.extname(notes)));

// const name = "joe";
// console.log(chalk.bgRed(path.join("/", "users", name, "notes.txt")));

// console.log(chalk.green(path.resolve("test.txt")));

// console.log(chalk.blue(path.normalize("/users/joe/..//test.txt")));

//FS Module

//Renaming file

// fs.rename("demo.txt", "test.txt", (err) => {
//   if (err) {
//     return console.error(err);
//   }
// });

//Writing to file
// var content = "By Vatsal";
// fs.writeFile("test.txt", content, { flag: "a+" }, (err) => {
//   console.log(err);
// });

// Reading File
// fs.readFile("test.txt", "utf8", (err, data) => {
//   console.log(data);
// });

//Creating Folder

// const folderName = "./Users";

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }
// } catch (err) {
//   console.error(err);
// }

//Rename Folder

// const folderPath = "../../";

// console.log(fs.readdirSync(folderPath));

//Remve Folder

// fs.rmdir("./Users", (err) => {
//   console.error(err);
// });
