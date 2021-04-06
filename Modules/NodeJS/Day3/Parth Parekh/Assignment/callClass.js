const Mobike = require("./Day3_Assignment");

const Customer1 = new Mobike(1, 910234500, "Parth", 12);
const Customer2 = new Mobike(2, 0102345768, "Dhoni", 10);
console.log("---------------------------");
const array = [Customer1, Customer2];

array.forEach((data) => {
    data.compute();
    data.display();
    console.log("---------------------------");
});

