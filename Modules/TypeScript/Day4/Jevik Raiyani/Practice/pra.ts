let keyVal = new Map();

keyVal.set("jevik",1);
keyVal.set("pratik",2);
keyVal.set("Tirath",5);

for (const i of keyVal.keys()) {
    console.log("map keys  "+ i);
}

for (const i of keyVal.values()) {
    console.log("map val "+i);
}

for (const i of keyVal.entries()) {
    console.log(i[0],  i[1]);
}
console.log(keyVal.get("Jevik"));
console.log(keyVal.has("asd"));
console.log(keyVal.delete("jevik"));
console.log(keyVal.size);
console.log(keyVal.clear);


let KeySet = new Set();

KeySet.add("jevik");
KeySet.add("praitk");
KeySet.add("Tirath");

console.log(KeySet);
console.log(KeySet.has("aa"));
console.log(KeySet.size);
console.log(KeySet.delete("jevik"));
console.log(KeySet.clear());


let date:Date = new Date();
console.log("DATE: +"+date)

let date1 :Date = new Date(100000000000);
console.log("Date : +"+date1)

let date2 : Date = new Date("2020-12-12");
console.log("Date : +"+date2)

let date3 : Date = new Date(2018,12,25,23,12,55,11);
console.log("Date : +"+date3);

let d1: Date = new Date(2020,12,14,20,55,5,20);
d1.setDate(1);
d1.setMonth(1);
d1.setFullYear(2020);
d1.setHours(1);
d1.setMinutes(1);
d1.setMilliseconds(1);
d1.setSeconds(1);

console.log(d1.getFullYear());
console.log(d1.getDate());
console.log(d1.getMonth());
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());

