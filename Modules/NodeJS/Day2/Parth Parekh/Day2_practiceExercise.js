const fs = require("fs");
const path = require("path");
// const notes = "/users/joe/notes.txt";
const chalk = require("chalk");

//1. Create one txt file name it as person.txt and write in that hello world
fs.writeFile(
    "person.txt",
    "Hello World",
    { flag: "w+" },
    (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File Created');
    }
);

//2. Append hello India in person.txt.
fs.appendFile("person.txt", '\nHello India', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('data added to file');
});

//3.Accept your name from command line. And append it to person.txt as “hello “+ “name”.
const args = process.argv.slice(2);
fs.appendFile("person.txt", `\nHello ${args}`, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('data added to file');
});

//4. Create two txt files, write some dummy text. Read two file content and print it in the console.
use async and await.
const fileRead = async () => {
    await fs.readFile("person.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    });

    await fs.readFile("demo.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    });
};
fileRead();

//5. Write your address in one txt file and find out how many consonants are there.
fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    }
    let a = data.split("");
    console.log(a);
    let Ccount = 0;
    let vcount = 0;
    for (let i = 0; i < a.length; i++) {
        if (
            a[i] == "A" ||
            a[i] == "a" ||
            a[i] == "E" ||
            a[i] == "e" ||
            a[i] == "i" ||
            a[i] == "I" ||
            a[i] == "o" ||
            a[i] == "O" ||
            a[i] == "U" ||
            a[i] == "u"
        ) {
            vcount++;
        } else {
            if (a[i] == " ") {
            } else Ccount++;
        }
    }
    console.log("Total vowel:" + vcount);
    console.log("Total Consonants:" + Ccount);
});

// 6. Remove person.txt file.
fs.unlink("person.txt", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("successfully deleted");
});

//7. Create one folder files and move person.txt in that file.
const currentpath = path.join(__dirname, "person.txt");
const newpath = path.join(__dirname, "files", "person.txt");
console.log(currentpath);
console.log(newpath);
fs.rename(currentpath, newpath , function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Successfully moved the file!");
    }
});


/*Extra Practice
console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));

console.log(chalk.bgRed("Hello world!"));
const name = "parth";
//You can join two or more parts of a path by using path.join():
console.log(chalk.green(path.join("/", "users", name, "notes.txt"))); //'/users/joe/notes.txt'
console.log(chalk.blue(path.resolve("joe.txt")));

console.log(path.normalize("/users/joe/..//test.txt")); //'/users/test.txt'

fs.readFile("./test.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});

fs.writeFile(
    "./test.txt",
    ", Kolkata , Hyrdabad ",
    { flag: "a+" },
    (err , data ) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    }
);

fs.appendFile("./test.txt", '\nWinner Of IPL 2021 Channai Super Kings', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('data added to file');
});

Rename the file
fs.rename("test.txt", "example.txt", (err) => {
    if (err) {
        console.log(err);
    } else console.log("file Rename successfully");
});


const folderName = "pat";
try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
} catch (err) {
    console.error(err);
}

const folderPath = "../../";  //Read the content of a directory
console.log( fs.readdirSync(folderPath));

fs.rmdir('./pat' , err  => { console.log(err);}) //To Remove Folder */