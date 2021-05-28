let firsts :number = 123;
let sec :number = 0x37CF;
let third :number = 0o377;
let fours :number = 0b111001;
let fives :number= 1235;
fives.valueOf();
console.log(firsts);
console.log(sec);
console.log(third);
console.log(fours);
console.log("VAlue Mehtods");
console.log(fives);
console.log(fives.valueOf());
console.log("Fixeds Mehtods");
console.log(fives.toFixed());

console.log("Fixeds Mehtods");
console.log(fives.toFixed());
console.log("Fixeds Mehtods  digits");
console.log(sec.toFixed(2));


console.log("Explonotesion Mehtods  digits");
console.log(sec.toExponential());

console.log(fours.toExponential());


console.log("LocaleString Mehtods  digits");
console.log(sec.toExponential());

console.log(fours.toExponential());

 console.log("Local string  digits");
console.log(fours.toLocaleString());     

console.log("======================string========================");

console.log("string");
console.log(fours.toString());

console.log("String");
let fnames :string = "Niraj";
let lnames :string = "Spara";
function fullname(){
 //var fullname = fnames+ "" + lnames;
 var fullname = ` ${fnames}   ${lnames}`;
 return fullname;
}
//let last : string = ${fnames}' and ' ${lnames};
console.log(fullname());
console.log(fnames.charAt(1));
let age :string = "22";
console.log(fnames.concat(lnames,age));

console.log(fnames.toUpperCase());


console.log("====================== Any ========================");
function mix(x: any , y: any){
return x+y;
}

let final = mix(10,25);
console.log(final);
let str = mix("priya","maheta");
console.log(str);

let val :any = "hi";
console.log(val);
val  = 22;
console.log(val);
val = true;
console.log(val);

console.log("======================  Array  ========================");

var list : number[] = [1,2,3];
console.log(list);
var genlist : Array<number> = [1,2,3];
console.log(genlist);


var values : (string|number)[] = ['Apple',1,'Mango',2,4,'Orange',3];
console.log(values);
var genvalues : Array<string|number> = ['Apple',1,'Mango',2,4,'Orange',3];
console.log(genvalues);


var strs : string[]=['Apple','Mango','Orange'];
console.log(strs);

for (var index in strs){
console.log(index+ "-" +strs[index]);
}
var data = list.pop()
console.log(data);
list.pop()
console.log(list);

list.push(7,6,5,4);
console.log(list);

list.sort();
console.log(list);

console.log(list.concat(data));

console.log(list.shift());


var newarry = strs.filter((strs,i,arr)=>{
    return strs.length<2
})
console.log(newarry);